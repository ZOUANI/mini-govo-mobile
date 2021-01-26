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
        console.log("Categories Array == ", response.data);
        setCategories(response.data);
        // if (response.data.token == null || response.data.token.length == 0) {
        //   Alert.alert(
        //     "Echec de la connexion !",
        //     "L'email ou le mot de passe est incorrect !",
        //     [{ text: "OK" }]
        //   );
        //   return;
        // }

        // const foundUser = {
        //   id: response.data.userVo.id,
        //   nom: response.data.userVo.lastName,
        //   prenom: response.data.userVo.firstName,
        //   email: response.data.userVo.email,
        //   code: response.data.userVo.code,
        //   password: response.data.userVo.password,
        //   role_id: response.data.userVo.roleVo.id,
        //   userToken: response.data.token,
        // };

        // console.log("Welcome", foundUser.prenom, foundUser.nom);
        // signIn(foundUser);
        // setTimeout(() => {
        //   // console.log("TIME OUT !!");
        // }, 2000);
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
    const title = item.label;
    const category = item;
    navigation.navigate("Products", { category, title });
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
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
}
