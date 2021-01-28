import React, { useState, useEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import { commandeProducts } from "../../data/dataArrays";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_URL as URL } from "../../utils/constants";

export default function commandeDetails({ route, navigation }) {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({});

  const findProductsByCommande = async () => {
    axios
      .get(URL + "/generated/orderLine/command/id/" + route.params.item.id)
      .then((response) => {
        console.log("orderLines Array == ", response.data);
        setProducts(response.data);
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
    console.log("Heyyy details", route.params.item.id);
    findProductsByCommande();
  }, []);

  renderProducts = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      //   onPress={() => onPressProduct(item)}
    >
      <View style={styles.container}>
        <View style={styles.fielsContainer1}>
          {/* <Text>{item.photo_url}</Text> */}
          <Image
            style={styles.ProduitPhoto}
            source={{ uri: item.productVo.imagePath }}
          />
          <View
            style={{
              flex: 2,
              flexDirection: "column",
            }}
          >
            <Text style={styles.produitTitre}>{item.productVo.label}</Text>
            <Text style={styles.produitQuantite}>
              Quantité :{" "}
              <Text style={{ color: "#000" }}>
                {Math.trunc(item.orderedQte)} unité
              </Text>
            </Text>
            <Text style={styles.produitPrix}>
              Prix :{" "}
              <Text style={{ color: "#000" }}>
                {item.orderedQte * item.productVo.price}
                {" DH"}
              </Text>
            </Text>
          </View>
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
        data={products}
        renderItem={renderProducts}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
}
