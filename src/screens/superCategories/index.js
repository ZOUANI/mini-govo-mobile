import React, { useState } from "react";
import {
  FlatList,
  Text,
  Button,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import { categories } from "../../data/dataArrays";
import styles from "../../styles/styles";

export default function SuperCategories({ navigation }) {
  onPressCategory = (item) => {
    const title = item.name;
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
          source={{ uri: item.photo_url }}
        />
        <Text style={styles.categoriesName}>{item.name}</Text>
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
