import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, Image, Alert } from "react-native";
import styles from "./styles";
import RNPickerSelect from "react-native-picker-select";
import axios from "axios";
import { API_URL as URL } from "../../utils/constants";

export default function TaskDetails({ route }) {
  const changeStatus = async (value) => {
    axios
      .put(
        URL +
          "/generated/orderLine/changeStatus/id/" +
          route.params.item.id +
          "/" +
          value
      )
      .then((response) => {
        // console.log("res change status == ", response.data);
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
    // console.log(" item ==", route.params.item.id);
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <Image
        style={{ height: 180 }}
        source={{
          uri: route.params.item.productVo.imagePath,
        }}
      />
      <Text style={styles.myTasksDetailsTitle}>
        {route.params.item.productVo.label}{" "}
      </Text>
      <View style={{ marginHorizontal: 20 }}>
        <View style={styles.myTasksDetailsRow}>
          <Text style={styles.myTasksDetailsText}>
            Réference de la commande :
          </Text>
          <Text style={styles.myTasksDetailsText}>
            {route.params.item.commandVo.reference}
          </Text>
        </View>
        <View style={styles.myTasksDetailsRow}>
          <Text style={styles.myTasksDetailsText}>Nom du produit :</Text>
          <Text style={styles.myTasksDetailsText}>
            {route.params.item.productVo.label}
          </Text>
        </View>
        <View style={styles.myTasksDetailsRow}>
          <Text style={styles.myTasksDetailsText}>Date commande :</Text>
          <Text style={styles.myTasksDetailsText}>
            {route.params.item.commandVo.orderDate.split(" ")[0]}
          </Text>
        </View>
        <View style={styles.myTasksDetailsRow}>
          <Text style={styles.myTasksDetailsText}>Date livraison :</Text>
          <Text style={styles.myTasksDetailsText}>
            {route.params.item.commandVo.dateSubmission.split(" ")[0]}
          </Text>
        </View>
        <View style={styles.myTasksDetailsRow}>
          <Text style={styles.myTasksDetailsText}>Quantité :</Text>
          <Text style={styles.myTasksDetailsText}>
            {route.params.item.orderedQte}
          </Text>
        </View>
        <View style={styles.myTasksDetailsRow}>
          <Text style={styles.myTasksDetailsText}>Prix total :</Text>
          <Text style={styles.myTasksDetailsText}>
            {route.params.item.price}
          </Text>
        </View>
        <View
          style={{
            paddingVertical: 5,
            paddingBottom: 22,
            flexDirection: "column",
          }}
        >
          <Text style={{ fontSize: 14 }}>Description :</Text>
          <Text style={styles.myTasksDetailsDescriptionText}>
            {route.params.item.description}
          </Text>
        </View>
        <Text style={{ fontSize: 14 }}>Etat de la tâche :</Text>
        <RNPickerSelect
          // selectedValue={this.state.language}
          value={route.params.item.orderStatusVo.id}
          placeholder={{}}
          onValueChange={(value) => changeStatus(value)}
          items={[
            { label: "Affectée", value: "1" },
            { label: "En préparation", value: "2" },
            { label: "Prête", value: "3" },
          ]}
        />
      </View>
    </ScrollView>
  );
}
