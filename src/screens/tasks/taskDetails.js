import React, { useState } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import styles from "./styles";
import RNPickerSelect from "react-native-picker-select";

export default function TaskDetails({ route }) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Image
        style={{ height: 180 }}
        source={{
          uri:
            "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        }}
      />
      <Text style={styles.myTasksDetailsTitle}>{route.params.item.nom} </Text>
      <View style={{ marginHorizontal: 20 }}>
        <View style={styles.myTasksDetailsRow}>
          <Text style={styles.myTasksDetailsText}>
            Réference de la commande :
          </Text>
          <Text style={styles.myTasksDetailsText}>CMD-3654632/0003</Text>
        </View>
        <View style={styles.myTasksDetailsRow}>
          <Text style={styles.myTasksDetailsText}>Nom du produit :</Text>
          <Text style={styles.myTasksDetailsText}>{route.params.item.nom}</Text>
        </View>
        <View style={styles.myTasksDetailsRow}>
          <Text style={styles.myTasksDetailsText}>Date commande :</Text>
          <Text style={styles.myTasksDetailsText}>27/11/2020</Text>
        </View>
        <View style={styles.myTasksDetailsRow}>
          <Text style={styles.myTasksDetailsText}>Date livraison :</Text>
          <Text style={styles.myTasksDetailsText}>30/11/2020</Text>
        </View>
        <View style={styles.myTasksDetailsRow}>
          <Text style={styles.myTasksDetailsText}>Quantité :</Text>
          <Text style={styles.myTasksDetailsText}>3 Unités</Text>
        </View>
        <View style={styles.myTasksDetailsRow}>
          <Text style={styles.myTasksDetailsText}>Prix total :</Text>
          <Text style={styles.myTasksDetailsText}>1000.00 MAD</Text>
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
          placeholder={{}}
          onValueChange={(value) => console.log(value)}
          items={[
            { label: "Affectée", value: "affectee" },
            { label: "En préparation", value: "enpreparation" },
            { label: "Prête", value: "prete" },
          ]}
        />
      </View>
    </ScrollView>
  );
}
