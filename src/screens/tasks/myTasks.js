import React, { useState } from "react";
import { FlatList, Text, View, TouchableHighlight } from "react-native";
import { myTasks } from "../../data/dataArrays";
import styles from "./styles";

export default function MyTasks({ navigation }) {
  toTaskDetails = (item) => {
    navigation.navigate("TaskDetails", { item });
  };
  suivieCommande = (item) => {
    navigation.navigate("suivieCommande", { item });
  };

  renderTasks = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      onPress={() => toTaskDetails(item)}
    >
      <View style={styles.container}>
        <Text style={styles.taskTitle}>{item.nom}</Text>
        <View style={styles.taskDetailsRow}>
          <Text style={styles.taskDetailsText}>Commandée le :</Text>
          <Text style={styles.taskDetailsText}>15/11/2020</Text>
        </View>
        <View style={styles.taskDetailsRow}>
          <Text style={styles.taskDetailsText}>A livrer le :</Text>
          <Text style={styles.taskDetailsText}>20/11/2020</Text>
        </View>
        <View style={styles.taskDetailsRow}>
          <Text style={styles.taskDetailsText}>Quantité :</Text>
          <Text style={styles.taskDetailsText}>7 Unités</Text>
        </View>
        <View style={styles.taskDetailsRow}>
          <Text style={styles.taskDetailsText}>Etat :</Text>
          <Text style={styles.taskDetailsText}>En cours de préparation</Text>
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
        data={myTasks}
        renderItem={renderTasks}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
}
