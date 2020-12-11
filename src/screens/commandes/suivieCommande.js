import React, { useState, useEffect } from "react";
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image,
  ToastAndroid,
  Button,
} from "react-native";
import styles from "./styles";

const suivieCommande = ({ route, navigation }) => {
  return (
    <View>
      <View style={styles.box}>
        <View style={styles.fieldContainer}>
          <Text style={styles.SuivieReferenceField}>REFERENCE</Text>
          <Text style={styles.SuivieReferenceField}>DATE LIVRAISON</Text>
        </View>
        <View style={styles.valeurContainer}>
          <Text style={styles.SuivieReferenceValue}>
            {route.params.item.reference}
          </Text>
          <Text style={styles.SuivieReferenceValue}>
            {route.params.item.dilivryDate}
          </Text>
        </View>
      </View>

      <View
        style={{
          marginTop: 10,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <View>
          <Image
            style={{ width: 250, height: 250 }}
            source={require("../../assets/images/livreur.png")}
          />
        </View>
        <View
          style={{
            // marginTop: 10,
            flexDirection: "row",
            // justifyContent: "center",
          }}
        >
          <View>
            <Image
              style={{ width: 90, height: 10 }}
              source={require("../../assets/images/etatTrue.png")}
            ></Image>
          </View>

          <View>
            <Image
              style={{ width: 90, height: 10 }}
              source={require("../../assets/images/etatTrue.png")}
            ></Image>
          </View>
          <View>
            <Image
              style={{ width: 90, height: 10 }}
              source={require("../../assets/images/etatTrue.png")}
            ></Image>
          </View>
          <View>
            <Image
              style={{ width: 90, height: 10, opacity: 0.2 }}
              source={require("../../assets/images/etatTrue.png")}
            ></Image>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Text>Reçue</Text>
        <Text>Confirmée</Text>
        <Text>Affecté</Text>
        <Text style={{ opacity: 0.2 }}>Prête</Text>
      </View>
    </View>
  );
};

export default suivieCommande;
