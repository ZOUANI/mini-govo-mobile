import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL as URL } from "../../utils/constants";
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  Button,
  ScrollView,
  TextInput,
  Platform,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Loader from "../../components/loader";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function SubmitOrder({ route, navigation }) {
  const [date, setDate] = useState(new Date());
  const [stringDate, setStringDate] = useState("");
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [adresse, setAdresse] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [commentaire, setCommentaire] = useState("");
  const [telephone, setTelephone] = useState("");
  const [user, setUser] = useState({});
  const [orderProducts, setOrderProducts] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [timedOut, setTimedOut] = React.useState(false);
  const { totalPanier, products } = route.params;

  useEffect(() => {
    const unsubscribe = navigation.addListener(
      "focus",
      () => {
        console.log("!! useEffect submit order !!");
        let listProducts = [...orderProducts];
        products.forEach((element) => {
          let mProduct = {
            price: element.price,
            orderedQte: element.quantity,
            productVo: {
              id: element.id,
            },
          };
          listProducts.push(mProduct);
        });
        setOrderProducts(listProducts);

        const getConnectedUser = async () => {
          setLoading(true);
          let connectedUser;
          try {
            connectedUser = await AsyncStorage.getItem("connectedUser");
            if (connectedUser != null) {
              let mUser = JSON.parse(connectedUser);
              if (mUser.phoneNumber != null && mUser.address != null) {
                setAdresse(mUser.address);
                setTelephone(mUser.phoneNumber);
                setNom(mUser.lastName);
                setPrenom(mUser.firstName);
              }
              setUser(mUser);
              setTimeout(() => {
                setLoading(false);
              }, 500);
            }
          } catch (e) {
            console.log(e);
            setTimeout(() => {
              setLoading(false);
            }, 500);
          }
        };

        getConnectedUser();

        return unsubscribe;
      },
      [navigation]
    );
  });

  const onChange = (event, selectedDate) => {
    console.log("Date choisi == ", selectedDate);
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    console.log("Date choisi current == ", currentDate);

    if (selectedDate != undefined) {
      let sDate = formatDate(selectedDate);
      console.log("sDate == ", sDate);
      setStringDate(sDate);
    }
  };

  function formatDate(someDate) {
    var d = new Date(someDate),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    let sDate = [year, month, day].join("-");

    console.log("sDate == ", sDate);
    return sDate;
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const handleTelephoneChange = (val) => {
    setTelephone(val);
  };

  const handleAdresseChange = (val) => {
    setAdresse(val);
  };

  const handleCommentaireChange = (val) => {
    setCommentaire(val);
  };

  const handleValider = () => {
    console.log("HANDLE VALIDER");

    let randomId = Date.now();
    let today = formatDate(new Date());
    if (telephone.length < 10 || telephone.length > 14) {
      Alert.alert(
        "Attention",
        "Merci de fournir un numéro de téléphone valide",
        [{ text: "D'accord" }]
      );
    } else if (adresse.length < 5) {
      Alert.alert("Attention", "Merci de fournir une adresse valide", [
        { text: "D'accord" },
      ]);
    } else if (stringDate.length == 0) {
      Alert.alert("Attention", "Merci de choisir une date de livraison", [
        { text: "D'accord" },
      ]);
    } else {
      let postData = {
        dateSubmission: stringDate,
        orderDate: today,
        address: adresse,
        reference: "CMD-" + randomId,
        total: totalPanier,
        orderStatusVo: {
          id: "1", //etat en attente par defaut..
        },
        clientVo: {
          id: user.id,
          phoneNumber: telephone,
          address: adresse,
        },
        commentsVo: [
          {
            message: commentaire,
            commentDate: today,
            userVo: {
              id: user.id,
            },
          },
        ],
        orderLinesVo: orderProducts,
      };
      valider(postData);
    }
  };

  const valider = (postData) => {
    setTimedOut(false);
    setLoading(true);
    // console.log("POST DATA =====> ", postData);
    const removeFromAsyncStorage = async (array) => {
      await AsyncStorage.setItem("products", JSON.stringify(array))
        .then(() => {
          console.log("Updated successfully");
        })
        .catch(() => {
          console.log("There was an error updating the products");
        });
    };
    const UpdateUserAsyncStorage = async (user) => {
      await AsyncStorage.setItem("connectedUser", JSON.stringify(user))
        .then(() => {
          console.log("Updated successfully");
        })
        .catch(() => {
          console.log("There was an error updating the products");
        });
    };
    axios
      .post(URL + "/generated/command/", postData, { timeout: 9000 })
      .then((response) => {
        console.log("RESPONSE == ", response.data);
        setLoading(false);
        setTimedOut(false);
        if (response.data != null) {
          let emptyProducts = [];
          removeFromAsyncStorage(emptyProducts);
          let xUser = { ...user };
          xUser.address = adresse;
          xUser.phoneNumber = telephone;
          setUser(xUser);
          UpdateUserAsyncStorage(xUser);
          Alert.alert(
            "",
            "Votre commande a été validé avec succèss",
            [{ text: "OK", onPress: () => navigation.goBack() }],
            { cancelable: false }
          );
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        let myStr = error + " ";
        if (myStr.includes("timeout")) {
          setTimedOut(true);
          Alert.alert(
            "Echec de la connexion !",
            "Il y a un problème au niveau du serveur :/",
            [{ text: "OK" }]
          );
          return;
        } else {
          setTimedOut(false);
          Alert.alert("Echec", "Il y a une erreur !", [{ text: "OK" }]);
          return;
        }
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <Loader loading={loading} />
      {/* <Text>COMING SOON!</Text> */}
      <ScrollView>
        <View style={styles.container}>
          <Text style={{ fontSize: 16, marginBottom: 7 }}>
            Client : {user.nom} {user.prenom}
          </Text>
          <Text style={{ fontSize: 16, marginBottom: 7 }}>
            E-mail : {user.email}
          </Text>
          {/* <Text>{user.nom}</Text> */}
          {/* <TextInput
            placeholder="Votre numéro de téléphone personnel"
            keyboardType="phone-pad"
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCapitalize="none"
            value={telephone}
            onChangeText={(val) => handleTelephoneChange(val)}
            // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          /> */}
        </View>
        <View style={styles.container}>
          <Text>Téléphone :</Text>
          <TextInput
            placeholder="Votre numéro de téléphone personnel"
            keyboardType="phone-pad"
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCapitalize="none"
            value={telephone}
            onChangeText={(val) => handleTelephoneChange(val)}
            // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
        </View>
        <View style={styles.container}>
          <Text>Adresse :</Text>
          <TextInput
            placeholder="Votre adresse pour la livraison"
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCapitalize="none"
            value={adresse}
            onChangeText={(val) => handleAdresseChange(val)}
            // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
        </View>
        <View style={styles.container}>
          <Text>Date livraison :</Text>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
          <Pressable onPress={showDatepicker}>
            <View pointerEvents="none">
              <TextInput
                placeholder="Choisissez une date de livraison"
                placeholderTextColor="#666666"
                style={styles.textInput}
                autoCapitalize="none"
                value={stringDate}
              />
            </View>
          </Pressable>
        </View>
        <View style={styles.container}>
          <Text>Commentaire :</Text>
          <TextInput
            placeholder="Ajouter un commentaire..."
            multiline
            numberOfLines={4}
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCapitalize="none"
            value={commentaire}
            onChangeText={(val) => handleCommentaireChange(val)}
            // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
        </View>
      </ScrollView>
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
              Total à payer :
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
            handleValider();
          }}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>Valider</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
