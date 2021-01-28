import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FlatList,
  Text,
  Button,
  View,
  Image,
  TouchableHighlight,
  Alert,
} from "react-native";
// import { categories } from "../../data/dataArrays";
import styles from "../../styles/styles";
import { API_URL as URL } from "../../utils/constants";

export default function SuperCategories({ navigation }) {
  const [categories, setCategories] = React.useState([]);

  useEffect(() => {
    findAllCategories();
  }, []);

  const findAllCategories = () => {
    axios
      .get(URL + "/generated/categoryProduit/")
      .then((response) => {
        // console.log("Categories Array == ", response.data);
        setCategories(response.data);
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

  onPressCategory = (item) => {
    const label = item.label;
    const category = item;
    navigation.navigate("Products", { category, label });
  };

  renderCategory = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      onPress={() => onPressCategory(item)}
    >
      <View style={styles.categoriesItemContainer}>
        <Image
          style={styles.categoriesPhoto}
          source={{ uri: item.imagePath }}
        />
        <Text style={styles.categoriesName}>{item.label}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View style={styles.container}>
      {categories.length == 0 ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: 125, height: 125 }}
            source={require("../../assets/images/waiting.png")}
          />
        </View>
      ) : (
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item) => `${item.id}`}
        />
      )}
    </View>
  );
}
