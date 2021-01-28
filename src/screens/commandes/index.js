import React, { useState, useEffect } from "react";
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_URL as URL } from "../../utils/constants";

export default function Commande({ navigation }) {
  const [Commandes, setCommandes] = useState([]);

  async function countOrderLines() {
    // console.log("in countOrderLines");
    const response = await fetch(
      URL + "/generated/orderLine/countOrderLinesByCommand/id/1"
    );
    return await response.json();
  }
  const findCommandsByClient = async () => {
    let connectedUser;
    let mUser;
    try {
      connectedUser = await AsyncStorage.getItem("connectedUser");
      if (connectedUser != null) {
        mUser = JSON.parse(connectedUser);
        // console.log("user == ", mUser);
      }
    } catch (e) {
      console.log(e);
    }

    axios
      .get(URL + "/generated/command/client/id/" + mUser.id, {
        // headers: { Authorization: `Bearer ${mUser.userToken}` },
      })
      .then((response) => {
        setCommandes(response.data);
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
    findCommandsByClient();
  }, []);

  onPressCommande = (item) => {
    navigation.navigate("CommandeDetails", { item });
  };
  suivieCommande = (item) => {
    navigation.navigate("suivieCommande", { item });
  };

  renderCommandes = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      onPress={() => onPressCommande(item)}
    >
      <View style={styles.container}>
        <View style={styles.fielsContainer1}>
          <Text style={styles.referenceField}>REFERENCE</Text>
          <Text style={styles.dateField}>COMMANDÉ LE</Text>
          <Text style={styles.statusField}>ETAT</Text>
        </View>
        <View style={styles.fielsContainer1}>
          <Text style={styles.referenceValue}>{item.reference}</Text>
          <Text style={styles.dateValue}>{item.orderDate.split(" ")[0]}</Text>
          <Text style={styles.statusValue}>En cours</Text>
        </View>
        <View style={styles.fielsContainer2}>
          <Text style={styles.produitsField}>PRODUITS</Text>
          <Text style={styles.totalField}>TOTAL</Text>
        </View>
        <View style={styles.fielsContainer3}>
          <Text style={styles.produitsValue}>2</Text>
          <Text style={styles.totalValue}>{item.total}</Text>
        </View>
        <View style={styles.fielsContainer4}>
          <Text style={styles.dateLivraisonMessage}>
            Cette commande sera livrée le{" "}
            <Text style={styles.DateLivraisonValue}>
              {item.dateSubmission.split(" ")[0]}
            </Text>
          </Text>
        </View>
        {/* <View style={styles.fielsContainer4}> */}
        {/* <Button title="Suivie" onPress={() => suivieCommande(item)} /> */}
        <TouchableOpacity
          onPress={() => suivieCommande(item)}
          style={styles.appButtonContainer}
        >
          <Text style={{ fontSize: 14, color: "#fff" }}>
            Suiver cette commande
          </Text>
        </TouchableOpacity>
        {/* </View> */}
      </View>
    </TouchableHighlight>
  );

  return (
    <View
    // style={styles.container}
    >
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={Commandes}
        renderItem={renderCommandes}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
}
