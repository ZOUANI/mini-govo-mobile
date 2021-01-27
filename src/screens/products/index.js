import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles";
// import { products, categories } from "../../data/dataArrays";
import InputSpinner from "react-native-input-spinner";
import { MaterialIcons } from "@expo/vector-icons";
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image,
  ToastAndroid,
  TouchableOpacity,
  Alert,
} from "react-native";
import Dialog from "react-native-dialog";
import { API_URL as URL } from "../../utils/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const Toast = ({ visible, message }) => {
//   if (visible) {
//     ToastAndroid.showWithGravityAndOffset(
//       message,
//       ToastAndroid.LONG,
//       ToastAndroid.BOTTOM,
//       25,
//       50
//     );
//     return null;
//   }
//   return null;
// };

export default function Products({ route, navigation }) {
  const [visible, setVisible] = useState(false);
  // const [visibleToast, setvisibleToast] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedItem, setSelectedItem] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPanier, setTotalPanier] = useState(0.0);
  const [totalSelectedProduct, setTotalSelectedProduct] = useState(0.0);
  const { category, label } = route.params;

  // const productsArray = getProductsByCategory(category.id);

  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      console.log("!! useEffect products !!");

      findProductsByCategory(category.id);

      const getProductsFromStorage = async () => {
        let existingProducts;
        try {
          existingProducts = await AsyncStorage.getItem("products");
          // console.log("PRODUCTS == ", existingProducts);
          if (existingProducts != null) {
            let mExistingProducts = JSON.parse(existingProducts);
            setCartProducts(mExistingProducts);
            updateTotalPanier(mExistingProducts);
          }
        } catch (e) {
          console.log(e);
        }
      };

      getProductsFromStorage();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  function updateTotalPanier(productsArray) {
    let mTotal = 0;
    productsArray.forEach((element) => {
      mTotal = mTotal + element.quantity * element.price;
    });
    setTotalPanier(mTotal);
  }

  function findArrayElementById(array, id) {
    let mElement = null;
    array.forEach((element) => {
      if (element.id == id) {
        mElement = element;
      }
    });
    return mElement;
  }

  const addToPanier = () => {
    console.log("************* AJOUTER AU PANIER TRIGGERED *************");
    const productToBeSaved = {
      id: selectedItem.id,
      reference: selectedItem.reference,
      label: selectedItem.label,
      price: selectedItem.price,
      categoryId: selectedItem.categoryProduitVo.id,
      imagePath: selectedItem.imagePath,
      quantity: quantity,
    };
    const saveNewProduct = async (xProducts) => {
      await AsyncStorage.setItem("products", JSON.stringify(xProducts))
        .then(() => {
          console.log("It was saved successfully");
        })
        .catch(() => {
          console.log("There was an error saving the new product");
        });
    };
    if (cartProducts.length != 0) {
      console.log("Panier contient des produits.... ");
      //Check if the same selected product already exists in the cart :
      var result = findArrayElementById(cartProducts, selectedItem.id);
      console.log("RESULT == ", result);
      if (result == null) {
        console.log("il n existe pas d element avec le meme id...");
        //Save the new element in the cart
        let mProducts = [...cartProducts];
        mProducts.push(productToBeSaved);
        setCartProducts(mProducts);
        updateTotalPanier(mProducts);
        saveNewProduct(mProducts);
      } else {
        console.log("il y a deja un element avec le meme id...");
        //Increment the quantity of the element
        let newQuantity = result.quantity + quantity;
        // console.log("new quantity == ", newQuantity);
        let mProducts = [...cartProducts];
        var objIndex = mProducts.indexOf(result);
        mProducts[objIndex].quantity = newQuantity;
        // console.log("new list == ", mProducts);
        setCartProducts(mProducts);
        updateTotalPanier(mProducts);
        saveNewProduct(mProducts);
      }
    } else {
      console.log("Panier vide.... ");
      //Save the new element in the cart
      let mProducts = [...cartProducts];
      mProducts.push(productToBeSaved);
      setCartProducts(mProducts);
      updateTotalPanier(mProducts);
      saveNewProduct(mProducts);
    }

    // setvisibleToast(true);
    setVisible(false);
    setQuantity(1);
    setTotalSelectedProduct(0);
    setSelectedItem({});
  };

  const findProductsByCategory = (categoryId) => {
    axios
      .get(URL + "/generated/product/categoryProduit/id/" + categoryId)
      .then((response) => {
        // console.log("Products Array == ", response.data);
        setProducts(response.data);
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

  onPressProduct = (item) => {
    console.log("Clicked product card " + item.label);
    setVisible(true);
    setSelectedItem(item);
    setTotalSelectedProduct(item.price * quantity);
  };

  onPressGoToCart = () => {
    navigation.navigate("Panier");
  };

  renderProducts = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      onPress={() => onPressProduct(item)}
    >
      <View style={styles.superContainer}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item.imagePath }} />
          <Text style={styles.title}>{item.label}</Text>
          <Text style={styles.category}>
            {/* {getCategoryName(item.categoryProduitVo.id)} */}
            {/* {item.categoryProduitVo.label} */}
            {item.price} MAD
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );

  return (
    <View style={{ flex: 1 }}>
      {/* <Toast
        visible={visibleToast}
        message={
          "Vous avez ajouté " +
          quantity +
          " " +
          selectedItem.label +
          " a votre panier "
        }
      /> */}
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={products}
        renderItem={renderProducts}
        keyExtractor={(item) => `${item.id}`}
      />

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
            padding: 7,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            // backgroundColor: "#636644",
          }}
        >
          <Text
            style={{
              flex: 1,
              fontSize: 16,
              fontWeight: "bold",
              color: "#d68504",
            }}
          >
            {totalPanier} MAD
          </Text>
          <Text
            style={{
              flex: 1,
              fontSize: 14,
              color: "#d68504",
            }}
          >
            ({cartProducts.length} éléments)
          </Text>
        </View>
        {/* </View> */}
        <TouchableOpacity
          onPress={onPressGoToCart}
          style={styles.appButtonContainer}
        >
          <MaterialIcons
            name="shopping-cart"
            size={26}
            // onPress={openMenu}
            style={styles.icon}
          />
          <Text style={styles.appButtonText}>Aller au panier</Text>
        </TouchableOpacity>
      </View>

      {visible && (
        <View>
          <Dialog.Container
            visible={visible}
            onBackdropPress={() => {
              setVisible(false);
              setTotalSelectedProduct(0);
              setQuantity(1);
              setSelectedItem({});
            }}
          >
            <Dialog.Title style={{ alignSelf: "center", marginBottom: 10 }}>
              {selectedItem.label}
            </Dialog.Title>
            <Dialog.Input
              placeholder="Description.."
              multiline
              style={{
                fontSize: 13,
                borderBottomColor: "#000",
                borderBottomWidth: 1,
              }}
            />
            <View style={{ alignItems: "center" }}>
              {/* <Dialog.Description style={styles.taskDialogText}> */}
              <InputSpinner
                style={{
                  marginTop: 15,
                }}
                max={20}
                min={1}
                // background={"#eaeaea"}
                step={1}
                color={"#f7a21a"}
                value={quantity}
                onChange={(num) => {
                  setTotalSelectedProduct(num * selectedItem.price);
                  setQuantity(num);
                  console.log(num);
                }}
              />
              <Text style={{ marginBottom: 10 }}>Unité</Text>
              <Text style={{ marginBottom: 15 }}>
                {totalSelectedProduct} MAD
              </Text>
            </View>
            <Dialog.Button
              label="Annuler"
              onPress={() => {
                setVisible(false);
                setTotalSelectedProduct(0);
                setQuantity(1);
                setSelectedItem({});
              }}
            />
            <Dialog.Button
              label="Ajouter au panier"
              onPress={() => {
                addToPanier();
              }}
            />
          </Dialog.Container>
        </View>
      )}
    </View>
  );
}
