import React from "react";
import axios from "axios";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from "react-native";
import styles from "./styles";
import * as Animatable from "react-native-animatable";
// import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { API_URL as URL } from "../../utils/constants";

// import { useTheme } from "react-native-paper";

import { AuthContext } from "../../components/context";

import { users } from "../../data/dataArrays";

const Login = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  // const { colors } = useTheme();

  const { signIn } = React.useContext(AuthContext);

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const loginHandle = (email, password) => {
    console.log("********** Login Screen (loginHandle) **********");

    if (data.email.length == 0 || data.password.length == 0) {
      Alert.alert(
        "Echec !",
        "L'email et le mot de passe ne doivent pas être vides !",
        [{ text: "Okay" }]
      );
      return;
    }

    let postData = {
      email: email.trim(),
      password: password,
    };

    getUserByLogin(postData);

    // if (foundUser == null) {
    //   Alert.alert(
    //     "Echec de la connexion !",
    //     "Email ou mot de passe est incorrect !",
    //     [{ text: "OK" }]
    //   );
    //   return;
    // }
    // const foundUser = users.filter((item) => {
    //   return email == item.email && password == item.password;
    // });

    // console.log("********** LOGIN SUCCESS **********");
    // console.log("Welcome 1 ", foundUser);
    // console.log("Welcome 2 ", foundUser[0]);
    // console.log("Welcome ", foundUser[0].nom, " ", foundUser[0].prenom);
    // signIn(foundUser);
  };

  const getUserByLogin = (postData) => {
    axios
      .post(URL + "/generated/auth/login", postData)
      .then((response) => {
        console.log("TOKEN == ", response.data.token);
        console.log("USER == ", response.data.userVo);

        if (response.data.token == null || response.data.token.length == 0) {
          Alert.alert(
            "Echec de la connexion !",
            "L'email ou le mot de passe est incorrect !",
            [{ text: "OK" }]
          );
          return;
        }

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
        signIn(foundUser);
        // setTimeout(() => {
        //   // console.log("TIME OUT !!");
        // }, 2000);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(
          "Echec de la connexion !",
          "L'email ou le mot de passe est incorrect !",
          [{ text: "OK" }]
        );
        return;
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#f7a21a" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>S'authentifier </Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={styles.footer}
        // style={[
        //   styles.footer,
        //   {
        //     backgroundColor: colors.background,
        //   },
        // ]}
      >
        <Text style={styles.text_footer}>E-mail</Text>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" color={"#05375a"} size={20} />
          <TextInput
            placeholder="Votre adresse e-mail"
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Saisissez une adresse valide!.</Text>
          </Animatable.View>
        )}
        <View style={{ margin: 15 }}></View>
        <Text style={styles.text_footer}>Mot de passe</Text>
        <View style={styles.action}>
          <Feather name="lock" color={"#05375a"} size={20} />
          <TextInput
            placeholder="Votre mot de passe"
            placeholderTextColor="#666666"
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
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              le mot de passe doit contenir au moins 8 caractères.
            </Text>
          </Animatable.View>
        )}

        <TouchableOpacity>
          <Text style={{ color: "#f7a21a", marginTop: 15 }}>
            Mot de passe oublié ?
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          {/* <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              loginHandle(data.email, data.password);
            }}
          >
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
                SE CONNECTER
              </Text>
            </View>
          </TouchableOpacity> */}

          <TouchableOpacity
            onPress={() => {
              loginHandle(data.email, data.password);
            }}
            style={[
              styles.signIn,
              {
                borderColor: "#f7a21a",
                borderWidth: 1,
                marginTop: 15,
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
              SE CONNECTER
            </Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 15, marginTop: 10 }}>
            Vous n'avez pas de compte ?
          </Text>
          <Text
            onPress={() => {
              navigation.navigate("Register");
            }}
            style={{
              color: "#f7a21a",
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 1,
            }}
          >
            Inscrivez-vous
          </Text>
        </View>
      </Animatable.View>
    </View>
  );
};

export default Login;
