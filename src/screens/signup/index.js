import React from "react";
import axios from "axios";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
} from "react-native";
import styles from "./styles";
import * as Animatable from "react-native-animatable";
// import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
// import api_url from "../../utils/constants";
import { API_URL as URL } from "../../utils/constants";
import { AuthContext } from "../../components/context";

const Signup = ({ navigation }) => {
  const [data, setData] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const { signUp } = React.useContext(AuthContext);

  const registerHandle = (email, password, first_name, last_name) => {
    console.log("********** REGISTER TRIGGERED **********");
    console.log("email = ", email);
    console.log("password = ", password);
    console.log("first_name = ", first_name);
    console.log("last_name = ", last_name);
    let postData = {
      email: email.trim(),
      password: password,
      firstName: first_name.trim(),
      lastName: last_name.trim(),
      enabled: 1,
      roleVo: {
        id: "2", //Client's id hwa 2
      },
    };

    register(postData);
  };

  const register = (postData) => {
    axios
      .post(URL + "/generated/auth/register", postData)
      .then((response) => {
        console.log("TOKEN == ", response.data.token);
        console.log("USER == ", response.data.userVo);

        const foundUser = {
          id: response.data.userVo.id,
          nom: response.data.userVo.lastName,
          prenom: response.data.userVo.firstName,
          email: response.data.userVo.email,
          code: response.data.userVo.code,
          password: response.data.userVo.password,
          role_id: response.data.userVo.roleVo.id,
          userToken: response.data.token,
        };

        console.log("Welcome", foundUser.prenom, foundUser.nom);
        signUp(foundUser);
        // setTimeout(() => {
        //   console.log("TIME OUT !!");
        // }, 2000);
      })
      .catch((error) => {
        // console.log("KAYN CHI ERROR !!!!!!!");
        console.log(error);
        Alert.alert("Echec !", "Il y a un problème au niveau du serveur !", [
          { text: "OK" },
        ]);
        return;
      });
  };

  const validateEmail = (text) => {
    console.log("validatin : ", text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      console.log("Email is Not Correct");
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
      return false;
    } else {
      console.log("Email is Correct");
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    }
  };

  const textInputChange = (val) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(val) === false) {
      console.log("Email is Not Correct");
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    } else {
      console.log("Email is Correct");
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    }
    // if (val.length !== 0) {
    //   setData({
    //     ...data,
    //     email: val,
    //     check_textInputChange: true,
    //   });
    // } else {
    //   setData({
    //     ...data,
    //     email: val,
    //     check_textInputChange: false,
    //   });
    // }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const handlePrenomChange = (val) => {
    setData({
      ...data,
      first_name: val,
    });
  };

  const handleNomChange = (val) => {
    setData({
      ...data,
      last_name: val,
    });
  };

  // const handleConfirmPasswordChange = (val) => {
  //   setData({
  //     ...data,
  //     confirm_password: val,
  //   });
  // };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#f7a21a" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Inscrivez vous !</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>Nom</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Votre nom"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleNomChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 25,
              },
            ]}
          >
            Prénom
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Votre prénom"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePrenomChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 25,
              },
            ]}
          >
            Adresse e-mail
          </Text>
          <View style={styles.action}>
            <FontAwesome name="envelope-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Votre adresse e-mail"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 25,
              },
            ]}
          >
            Mot de passe
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Votre mot de passe"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>

          {/* <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing up you agree to our
            </Text>
            <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
              {" "}
              Terms of service
            </Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
              {" "}
              Privacy policy
            </Text>
          </View> */}
          <View style={styles.button}>
            {/* <TouchableOpacity style={styles.signIn} onPress={() => {}}>
              <View
                // colors={["#08d4c4", "#01ab9d"]}
                style={styles.signIn}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#fff",
                    },
                  ]}
                >
                  Sign Up
                </Text>
              </View>
            </TouchableOpacity> */}

            <TouchableOpacity
              onPress={() => {
                registerHandle(
                  data.email,
                  data.password,
                  data.first_name,
                  data.last_name
                );
              }}
              style={[
                styles.signIn,
                {
                  borderColor: "#f7a21a",
                  borderWidth: 1,
                  // marginTop: 15,
                },
              ]}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#f7a21a",
                  },
                ]}
              >
                S'INSCRIRE
              </Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 15, marginTop: 10 }}>
              Vous avez déjà un compte ?
            </Text>
            <Text
              onPress={() => {
                navigation.navigate("Login");
              }}
              style={{
                color: "#f7a21a",
                fontSize: 17,
                fontWeight: "bold",
                marginTop: 1,
              }}
            >
              Se connecter
            </Text>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default Signup;
