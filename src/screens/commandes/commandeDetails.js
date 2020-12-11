import React, { useState, useEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import { commandeProducts } from "../../data/dataArrays";
import styles from "./styles";

export default function commandeDetails() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(commandeProducts);
  }, []);

  renderProducts = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      //   onPress={() => onPressProduct(item)}
    >
      <View style={styles.container}>
        <View style={styles.fielsContainer1}>
          {/* <Text>{item.photo_url}</Text> */}
          <Image style={styles.ProduitPhoto} source={{ uri: item.photo_url }} />
          <View
            style={{
              flex: 2,
              flexDirection: "column",
            }}
          >
            <Text style={styles.produitTitre}>{item.title}</Text>
            <Text style={styles.produitQuantite}>
              Quantité :{" "}
              <Text style={{ color: "#000" }}>{item.quantite} unité</Text>
            </Text>
            <Text style={styles.produitPrix}>
              Prix : <Text style={{ color: "#000" }}>{item.prixTotal}</Text>
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
        keyExtractor={(item) => `${item.productId}`}
      />
    </View>
  );
}
