import React from "react";
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
} from "react-native";
import styles from "./styles";
import * as Animatable from "react-native-animatable";
// import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

const Signup = ({ navigation }) => {
  const [data, setData] = React.useState({
    username: "",
    password: "",
    confirm_password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

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
          <Text style={styles.text_footer}>Nom et prénom</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Votre nom et prénom"
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
                marginTop: 35,
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
                marginTop: 35,
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
            <TouchableOpacity style={styles.signIn} onPress={() => {}}>
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
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
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
