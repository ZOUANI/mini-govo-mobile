import React, { useState, useEffect } from "react";
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Loader from "../../components/loader";
import InputSpinner from "react-native-input-spinner";
// import styles from "../../styles/styles";
// import { products, categories } from "../../data/dataArrays";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Panier({ route, navigation }) {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [totalPanier, setTotalPanier] = useState(0.0);
  const [mToken, setMToken] = useState("");
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      console.log("!! useEffect panier !!");

      const getProductsFromStorage = async () => {
        setLoading(true);

        let existingProducts;
        let userToken;
        try {
          existingProducts = await AsyncStorage.getItem("products");
          userToken = await AsyncStorage.getItem("userToken");
          // console.log("PRODUCTS == ", existingProducts);
          // console.log("USER TOKEN ==== ", userToken);
          if (existingProducts != null) {
            let mProducts = JSON.parse(existingProducts);
            updateTotalPanier(mProducts);
            setProducts(mProducts);
            setTimeout(() => {
              setLoading(false);
            }, 500);
            // console.log("State dyal products == ", products);
          }
          setTimeout(() => {
            setLoading(false);
          }, 500);
          if (userToken != null) {
            setMToken(userToken);
          } else {
            setMToken("");
          }
        } catch (e) {
          setLoading(false);
          console.log(e);
        }
      };
      getProductsFromStorage();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
    // setProducts(getProductsByCategory(5));
    // getProductsFromStorage();
  }, [navigation]);

  function updateTotalPanier(productsArray) {
    let mTotal = 0;
    productsArray.forEach((element) => {
      mTotal = mTotal + element.quantity * element.price;
    });
    setTotalPanier(mTotal);
  }

  const finaliserCommande = () => {
    // console.log("Token dyal hwa == ", mToken);
    if (mToken.length == 0 || mToken == null) {
      navigation.navigate("Auth", { screen: "Login" });
    } else if (products.length == 0) {
      Alert.alert(
        "",
        "Votre panier est vide !",
        [{ text: "OK", onPress: () => console.log("OK") }],
        { cancelable: false }
      );
    } else {
      navigation.navigate("SubmitOrder", { totalPanier, products });
    }
  };

  const removeProduct = (item) => {
    const updateProductsInStorage = async (array) => {
      await AsyncStorage.setItem("products", JSON.stringify(array))
        .then(() => {
          console.log("Updated successfully");
        })
        .catch(() => {
          console.log("There was an error updating the products");
        });
    };
    // console.log("you want to remove ", item.label);
    var index = products.indexOf(item);
    // console.log("INDEX == ", index);
    let allItems = [...products];
    if (index !== -1) {
      allItems.splice(index, 1);
      setProducts(allItems);
      updateTotalPanier(allItems);
      updateProductsInStorage(allItems);
    }
    // allItems
    // navigation.navigate("Register");
  };

  const removeHandle = (item) => {
    Alert.alert(
      "",
      "Êtes-vous sûr de vouloir supprimer ce produit ?",
      [
        {
          text: "Annuler",
          onPress: () => console.log("Cancel"),
          style: "cancel",
        },
        { text: "Oui", onPress: () => removeProduct(item) },
      ],
      { cancelable: false }
    );
  };

  const updateQuantity = (num, item) => {
    console.log("affect ", num, " to ", item.label);
    const updateProductsInStorage = async (xProducts) => {
      await AsyncStorage.setItem("products", JSON.stringify(xProducts))
        .then(() => {
          console.log("It was saved successfully");
        })
        .catch(() => {
          console.log("There was an error saving the new product");
        });
    };
    let mProducts = [...products];
    // console.log("---- old list == ", mProducts);
    var objIndex = mProducts.indexOf(item);
    mProducts[objIndex].quantity = num;
    // console.log("---- new list == ", mProducts);
    setProducts(mProducts);
    updateTotalPanier(mProducts);
    updateProductsInStorage(mProducts);
  };

  renderProducts = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      //   onPress={() => onPressProduct(item)}
    >
      <View style={styles.superContainer}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item.imagePath }} />
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
              <Text style={styles.title}>{item.label}</Text>
              <Text style={{ flex: 1, fontSize: 14, color: "#d68504" }}>
                {item.price} MAD
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
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    removeHandle(item);
                  }}
                  style={{
                    marginBottom: 10,
                    marginLeft: 10,
                    width: 32,
                  }}
                >
                  <MaterialIcons name="delete" size={30} color="#f7a21a" />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  // backgroundColor: "#654656",
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
                    value={item.quantity}
                    rounded={false}
                    showBorder
                    onChange={(num) => {
                      updateQuantity(num, item);
                      // setQuantity(num);
                      // console.log(num);
                    }}
                  />
                </Text>
              </View>
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
      <Loader loading={loading} />
      {/* <Text>THIS IS THE PANIER SCREEN, WELCOME !</Text> */}
      {/* <ScrollView> */}
      {products.length == 0 && !loading ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: "100%", height: 260 }}
            source={require("../../assets/images/cartempty.png")}
          />
        </View>
      ) : (
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={products}
          renderItem={renderProducts}
          keyExtractor={(item) => `${item.id}`}
        />
      )}

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
              {products.length} éléments
            </Text>
            <Text
              style={{
                flex: 1,
                fontSize: 17,
                fontWeight: "bold",
                color: "#d68504",
              }}
            >
              {totalPanier} MAD
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            finaliserCommande();
          }}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>Finaliser la commande</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
