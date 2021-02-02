import React, { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { FlatList, Text, View, TouchableHighlight, Alert } from "react-native";
import styles from "./styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL as URL } from "../../utils/constants";

export default function MyTasks({ navigation }) {
  const [tasks, setTasks] = useState([]);
  const isFocused = useIsFocused();

  toTaskDetails = (item) => {
    navigation.navigate("TaskDetails", { item });
  };
  suivieCommande = (item) => {
    navigation.navigate("suivieCommande", { item });
  };

  const findTasks = async () => {
    let connectedUser;
    let mUser;
    try {
      connectedUser = await AsyncStorage.getItem("connectedUser");
      if (connectedUser != null) {
        mUser = JSON.parse(connectedUser);
        // console.log("user ==", mUser.id);
      }
    } catch (e) {
      console.log(e);
    }

    axios
      .get(URL + "/generated/orderLine/collaboratorTasks/id/" + mUser.id)
      .then((response) => {
        // response.data.forEach((item) => {
        //   console.log("Tast item =>", item.productVo.label);
        // });
        setTasks(response.data);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(
          "Echec de la connexion !",
          "Il y a un problème au niveau du serveur !",
          [{ text: "OK" }]
        );
        return;
      });
  };
  useEffect(() => {
    // console.log("hana f  my tasks");
    findTasks();
  }, [isFocused]);

  renderTasks = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      onPress={() => toTaskDetails(item)}
    >
      <View style={styles.container}>
        <Text style={styles.taskTitle}>{item.productVo.label}</Text>
        <View style={styles.taskDetailsRow}>
          <Text style={styles.taskDetailsText}>Commandée le :</Text>
          <Text style={styles.taskDetailsText}>
            {" "}
            {item.commandVo.orderDate.split(" ")[0]}
          </Text>
        </View>
        <View style={styles.taskDetailsRow}>
          <Text style={styles.taskDetailsText}>A livrer le :</Text>
          <Text style={styles.taskDetailsText}>
            {item.commandVo.dateSubmission.split(" ")[0]}
          </Text>
        </View>
        <View style={styles.taskDetailsRow}>
          <Text style={styles.taskDetailsText}>Quantité :</Text>
          <Text style={styles.taskDetailsText}>{item.orderedQte}</Text>
        </View>
        <View style={styles.taskDetailsRow}>
          <Text style={styles.taskDetailsText}>Etat :</Text>
          <Text style={styles.taskDetailsText}>{item.orderStatusVo.label}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={tasks}
        renderItem={renderTasks}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
}
