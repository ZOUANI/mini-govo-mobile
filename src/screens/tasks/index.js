import React, { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { FlatList, Text, View, TouchableHighlight, Alert } from "react-native";
import { AppLoading } from "expo";
import styles from "./styles";
import * as Font from "expo-font";
import Dialog from "react-native-dialog";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { API_URL as URL } from "../../utils/constants";

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("../../assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("../../assets/fonts/Nunito-Bold.ttf"),
  });

export default function AffectedTasks({ navigation }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [affectedTasks, setAffectedTasks] = useState([]);
  const isFocused = useIsFocused();

  const findAffectedTasks = async () => {
    let connectedUser;
    let mUser;
    try {
      connectedUser = await AsyncStorage.getItem("connectedUser");
      if (connectedUser != null) {
        mUser = JSON.parse(connectedUser);
        console.log("user ==>>>>>>>>>>>>>>>>>>>>>>>>>", mUser.id);
      }
    } catch (e) {
      console.log(e);
    }

    axios
      .get(
        URL + "/generated/orderLine/collaboratorAffectedTasks/id/" + mUser.id
      )
      .then((response) => {
        // response.data.forEach((item) => {
        //   console.log("Affectef Task item ==>", item.productVo.label);
        // });
        setAffectedTasks(response.data);
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
    console.log("hana f affected tasks");
    findAffectedTasks();
  }, [visible]);
  onPressTask = (item) => {
    setSelectedItem(item);
    setVisible(true);
  };

  const handleIgnorer = async () => {
    console.log("selected item id==", selectedItem.id);
    axios
      .put(URL + "/generated/orderLine/ignorerTache/id/" + selectedItem.id)
      .then((response) => {
        console.log("res ignorer == ", response.data);
        setVisible(false);
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

  const handleEncharger = async () => {
    console.log("selected item id==", selectedItem.id);
    axios
      .put(URL + "/generated/orderLine/enchargerTache/id/" + selectedItem.id)
      .then((response) => {
        console.log("res encharger == ", response.data);
        setVisible(false);
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

  handleDelete = (item) => {
    console.log("handle delete");
  };

  renderTasks = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      onPress={() => onPressTask(item)}
    >
      <View style={styles.container}>
        <Text style={styles.taskTitle}>{item.productVo.label}</Text>
        <View style={styles.taskDetailsRow}>
          <Text style={styles.taskDetailsText}>Commandée le :</Text>
          <Text style={styles.taskDetailsText}>
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
      </View>
    </TouchableHighlight>
  );

  if (fontsLoaded) {
    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={affectedTasks}
          renderItem={renderTasks}
          keyExtractor={(item) => `${item.id}`}
        />
        {visible && (
          <View>
            <Dialog.Container visible={visible}>
              <Dialog.Title>Détails de la tâche</Dialog.Title>
              <View style={{ flexDirection: "row" }}>
                <Dialog.Description style={styles.taskDialogText}>
                  Réference :
                </Dialog.Description>
                <Dialog.Description style={styles.taskDialogText}>
                  {selectedItem.commandVo.reference}
                </Dialog.Description>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Dialog.Description style={styles.taskDialogText}>
                  Nom du produit :
                </Dialog.Description>
                <Dialog.Description style={styles.taskDialogText}>
                  {selectedItem.productVo.label}
                </Dialog.Description>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Dialog.Description style={styles.taskDialogText}>
                  Date commande :
                </Dialog.Description>
                <Dialog.Description style={styles.taskDialogText}>
                  {selectedItem.commandVo.orderDate.split(" ")[0]}
                </Dialog.Description>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Dialog.Description style={styles.taskDialogText}>
                  Date livraison :
                </Dialog.Description>
                <Dialog.Description style={styles.taskDialogText}>
                  {selectedItem.commandVo.dateSubmission.split(" ")[0]}
                </Dialog.Description>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Dialog.Description style={styles.taskDialogText}>
                  Quantité :
                </Dialog.Description>
                <Dialog.Description style={styles.taskDialogText}>
                  {selectedItem.orderedQte}
                </Dialog.Description>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Dialog.Description style={styles.taskDialogText}>
                  Prix total :
                </Dialog.Description>
                <Dialog.Description style={styles.taskDialogText}>
                  {selectedItem.price}
                </Dialog.Description>
              </View>
              <View style={{ paddingBottom: 22, flexDirection: "column" }}>
                <Dialog.Description style={{ fontSize: 14 }}>
                  Description :
                </Dialog.Description>
                {selectedItem.description != null &&
                  selectedItem.description !== "" && (
                    <Dialog.Description
                      style={{ marginLeft: 16, fontSize: 14 }}
                    >
                      {selectedItem.description}
                    </Dialog.Description>
                  )}
              </View>
              <View style={{ paddingVertical: 22, flexDirection: "row" }}>
                <Dialog.Button
                  label="Annuler"
                  onPress={() => {
                    setVisible(false);
                  }}
                />
                <Dialog.Button label="Refuser" onPress={handleIgnorer} />
                <Dialog.Button label="S'en charger" onPress={handleEncharger} />
              </View>
            </Dialog.Container>
          </View>
        )}
      </View>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
