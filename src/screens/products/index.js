import React, { useState } from "react";
import styles from "./styles";
import { products, categories } from "../../data/dataArrays";
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
} from "react-native";
import Dialog from "react-native-dialog";

function getProductsByCategory(categoryId) {
  const productsArray = [];
  products.map((data) => {
    if (data.categoryId == categoryId) {
      productsArray.push(data);
    }
  });
  return productsArray;
}

function getCategoryName(categoryId) {
  let name;
  categories.map((data) => {
    if (data.id == categoryId) {
      name = data.name;
    }
  });
  return name;
}

const Toast = ({ visible, message }) => {
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
    return null;
  }
  return null;
};

export default function Products({ route, navigation }) {
  const [visible, setVisible] = useState(false);
  const [visibleToast, setvisibleToast] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedItem, setSelectedItem] = useState({});
  const { category, title } = route.params;

  const productsArray = getProductsByCategory(category.id);

  onPressProduct = (item) => {
    console.log("Clicked product card " + item.title);
    setVisible(true);
    setSelectedItem(item);
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
          <Image style={styles.photo} source={{ uri: item.photo_url }} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category}>
            {getCategoryName(item.categoryId)}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );

  return (
    <View style={{ flex: 1 }}>
      <Toast
        visible={visibleToast}
        message={
          "Vous avez ajouté " +
          quantity +
          " " +
          selectedItem.title +
          " a votre panier "
        }
      />
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={productsArray}
        renderItem={renderProducts}
        keyExtractor={(item) => `${item.productId}`}
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
            400.00 MAD
          </Text>
          <Text
            style={{
              flex: 1,
              fontSize: 14,
              color: "#d68504",
            }}
          >
            (2 éléments)
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
            }}
          >
            <Dialog.Title style={{ alignSelf: "center", marginBottom: 10 }}>
              {selectedItem.title}
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
                  setQuantity(num);
                  console.log(num);
                }}
              />
              <Text style={{ marginBottom: 25 }}>Unité</Text>
            </View>
            <Dialog.Button
              label="Annuler"
              onPress={() => {
                setVisible(false);
              }}
            />
            <Dialog.Button
              label="Ajouter au panier"
              onPress={() => {
                setvisibleToast(true);
                setVisible(false);
              }}
            />
          </Dialog.Container>
        </View>
      )}
    </View>
  );
}
