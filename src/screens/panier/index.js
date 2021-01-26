import React, { useState, useEffect } from "react";
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from "react-native";
import InputSpinner from "react-native-input-spinner";
// import styles from "../../styles/styles";
import { products, categories } from "../../data/dataArrays";
import styles from "./styles";

function getProductsByCategory(categoryId) {
  const productsArray = [];
  products.map((data) => {
    if (data.categoryId == categoryId) {
      productsArray.push(data);
    }
  });
  return productsArray;
}

export default function Panier({ route, navigation }) {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setProducts(getProductsByCategory(5));
  }, []);

  onPressGoToRegister = () => {
    console.log("Token dyal panier hwa == ", mToken);
    // navigation.navigate("Register");
  };

  renderProducts = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      //   onPress={() => onPressProduct(item)}
    >
      <View style={styles.superContainer}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item.photo_url }} />
          <View
            style={{
              flex: 2,
              flexDirection: "column",
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                // backgroundColor: "#2863EE",
              }}
            >
              <Text style={styles.title}>{item.title}</Text>
              <Text style={{ flex: 1, fontSize: 14, color: "#d68504" }}>
                200 MAD
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                marginRight: 7,
                justifyContent: "flex-end",
                flexDirection: "row",
                // backgroundColor: "#465464",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  marginBottom: 7,
                  marginLeft: 7,
                }}
              >
                <InputSpinner
                  width={90}
                  height={35}
                  max={20}
                  min={1}
                  buttonFontSize={18}
                  fontSize={11}
                  // background={"#eaeaea"}
                  step={1}
                  color={"#f7a21a"}
                  value={quantity}
                  rounded={false}
                  showBorder
                  onChange={(num) => {
                    setQuantity(num);
                    console.log(num);
                  }}
                />
              </Text>
            </View>
          </View>
          {/* <Text style={styles.category}>
            {getCategoryName(item.categoryId)}
          </Text> */}
        </View>
        {/* <CustomButton onPress={() => onPressProduct(item)} /> */}
      </View>
    </TouchableHighlight>
  );

  return (
    <View style={{ flex: 1 }}>
      {/* <Text>THIS IS THE PANIER SCREEN, WELCOME !</Text> */}
      {/* <ScrollView> */}

      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={products}
        renderItem={renderProducts}
        keyExtractor={(item) => `${item.productId}`}
      />
      {/* </ScrollView> */}
      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: "#cfcfcf",
          backgroundColor: "#eaeaea",
          bottom: 0,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
            marginLeft: 10,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <View style={{ padding: 7, flex: 1, flexDirection: "column" }}>
            <Text
              style={{
                flex: 1,
                fontSize: 14,
                color: "#d68504",
              }}
            >
              2 éléments
            </Text>
            <Text
              style={{
                flex: 1,
                fontSize: 17,
                fontWeight: "bold",
                color: "#d68504",
              }}
            >
              400.00 MAD
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={onPressGoToRegister}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>Finaliser la commande</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
