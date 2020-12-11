import React, { useState, useEffect } from "react";
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { commandes } from "../../data/dataArrays";
import styles from "./styles";

export default function Commande({ navigation }) {
  const [Commandes, setCommandes] = useState([]);

  useEffect(() => {
    setCommandes(commandes);
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
          <Text style={styles.dateValue}>{item.orderDate}</Text>
          <Text style={styles.statusValue}>En cours</Text>
        </View>
        <View style={styles.fielsContainer2}>
          <Text style={styles.produitsField}>PRODUITS</Text>
          <Text style={styles.totalField}>TOTAL</Text>
        </View>
        <View style={styles.fielsContainer3}>
          <Text style={styles.produitsValue}>{item.nbrProduits}</Text>
          <Text style={styles.totalValue}>{item.total}</Text>
        </View>
        <View style={styles.fielsContainer4}>
          <Text style={styles.dateLivraisonMessage}>
            Cette commande sera livrée le{" "}
            <Text style={styles.DateLivraisonValue}>{item.orderDate}</Text>
          </Text>
        </View>
        {/* <View style={styles.fielsContainer4}> */}
        {/* <Button title="Suivie" onPress={() => suivieCommande(item)} /> */}
        <TouchableOpacity
          onPress={() => suivieCommande(item)}
          style={styles.appButtonContainer}
        >
          <Text style={{ fontSize: 14, color: "#fff" }}>
            Suivre votre commande
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
        data={commandes}
        renderItem={renderCommandes}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
}
