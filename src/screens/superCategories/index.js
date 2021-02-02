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
import Loader from "../../components/loader";
import styles from "../../styles/styles";
import { API_URL as URL } from "../../utils/constants";

export default function SuperCategories({ navigation }) {
  const [categories, setCategories] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [timedOut, setTimedOut] = React.useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      console.log("!! useEffect categories !!");
      findAllCategories();
    });
    return unsubscribe;
  }, [navigation]);

  const findAllCategories = () => {
    setTimedOut(false);
    setLoading(true);
    axios
      .get(URL + "/generated/categoryProduit/", { timeout: 9000 })
      .then((response) => {
        // console.log("Categories Array == ", response.data);
        setCategories(response.data);
        setLoading(false);
        setTimedOut(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        let myStr = error + " ";
        // console.log("MYSTR === ", myStr);
        if (myStr.includes("timeout")) {
          setTimedOut(true);
          Alert.alert(
            "Echec de la connexion !",
            "Il y a un problème au niveau du serveur :/",
            [{ text: "OK" }]
          );
          return;
        }
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
      <Loader loading={loading} />
      {categories.length == 0 && timedOut ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: 255, height: 255 }}
            source={require("../../assets/images/food.png")}
          />
          <Text style={{ marginTop: 30, fontSize: 18 }}>
            Server unreachable :(
          </Text>
          <Text
            onPress={() => {
              findAllCategories();
            }}
            style={{
              color: "#f7a21a",
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 7,
            }}
          >
            Refresh
          </Text>
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
