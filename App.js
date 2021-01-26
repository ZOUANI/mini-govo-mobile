import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import SuperCategories from "./src/screens/superCategories";
import Categories from "./src/screens/categories";
import Products from "./src/screens/products";
import Panier from "./src/screens/panier";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigator from "./src/routes/drawer";

// import { DrawerContent } from './screens/DrawerContent';

import { AuthContext } from "./src/components/context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./src/assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
  });

export default function App() {
  // const AuthContext = React.createContext();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const initialLoginState = {
    isLoading: true,
    username: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          username: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          username: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          username: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem("userToken");
        console.log("USER TOKEN == ", userToken);
      } catch (e) {
        console.log(e);
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    };

    bootstrapAsync();

    // setTimeout(async () => {
    //   // setIsLoading(false);
    //   let userToken;
    //   // userToken = null;
    //   try {
    //     userToken = await AsyncStorage.getItem("userToken");
    //   } catch (e) {
    //     console.log(e);
    //   }
    //   // console.log('user token: ', userToken);
    //   dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    // }, 1000);
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (foundUser) => {
        // setUserToken('fgkj');
        // setIsLoading(false);
        const userToken = String(foundUser[0].userToken);
        const username = foundUser[0].username;

        try {
          await AsyncStorage.setItem("userToken", userToken);
        } catch (e) {
          console.log(e);
        }
        // console.log('user token: ', userToken);
        dispatch({ type: "LOGIN", id: username, token: userToken });
      },
      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGOUT" });
      },
      signUp: () => {
        // setUserToken('fgkj');
        // setIsLoading(false);
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      {/* <Stack.Navigator> */}
      <Navigator loginState={loginState} />
      {/* {loginState.userToken == null ? (
        <Navigator logged={false} />
      ) : (
        <Navigator logged={true} />
      )} */}
      {/* </Stack.Navigator> */}
    </AuthContext.Provider>
  );

  // return (
  // <AuthContext.Provider value={authContext}>
  // {/* <Navigator loginState={loginState} />; */}
  // if (fontsLoaded) {
  //   return <Navigator />;
  // } else {
  //   return (
  //     <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
  //   );
  // }
  // </AuthContext.Provider>
  // );
}

// const Stack = createStackNavigator();

// const Drawer = createDrawerNavigator();

// function Home() {
//   return (
//     <Stack.Navigator
//       initialRouteName="SuperCategories"
//       screenOptions={{
//         headerTintColor: "#fff",
//         headerStyle: {
//           backgroundColor: "#f7a21a",
//         },
//       }}
//     >
//       <Stack.Screen
//         name="SuperCategories"
//         component={SuperCategories}
//         options={{
//           title: "Super catégories",
//         }}
//       />
//       <Stack.Screen
//         name="Categories"
//         component={Categories}
//         options={{ title: "Catégories" }}
//       />
//       <Stack.Screen
//         name="Products"
//         component={Products}
//         options={{ title: "Produits" }}
//       />
//     </Stack.Navigator>
//   );
// }

// export default function AppNav() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="About">
//         {/* <Drawer.Screen name="Home" component={Home} /> */}
//         <Drawer.Screen name="Products" component={Products} />
//         <Drawer.Screen name="About" component={About} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// import React from 'react';
// import Home from './src/scenes/home';

// export default function App() {
//   return (
//     <Home />
//   );
// }

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
// import Login from './src/scenes/login';

// export default function App() {
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");

//   return (
//     <View style={styles.container}>
//       <Text style={styles.logo}>Mini-GLOVO</Text>
//       <View style={styles.inputView} >
//         <TextInput
//           style={styles.inputText}
//           placeholder="Email..."
//           placeholderTextColor="#003f5c"
//           onChangeText={text => setEmail(text)}
//           value={email}
//         />
//       </View>
//       <View style={styles.inputView} >
//         <TextInput
//           style={styles.inputText}
//           placeholder="Mot de passe..."
//           secureTextEntry
//           placeholderTextColor="#003f5c"
//           onChangeText={text => setPassword(text)}
//           value={password}
//         />
//       </View>
//       <TouchableOpacity>
//         <Text style={styles.forgot}>Mot de passe oublié ?</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.loginBtn}>
//         <Text style={styles.loginText}>SE CONNECTER</Text>
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <Text style={styles.signup}>S'INSCRIRE</Text>
//       </TouchableOpacity>
//       {/* <Text>Open up App.js to start working on your app!!</Text> */}
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   logo: {
//     fontWeight: "bold",
//     fontSize: 50,
//     color: "#ff5a66",
//     marginBottom: 40
//   },
//   inputView: {
//     width: "80%",
//     backgroundColor: "#FFF",
//     borderWidth: 1,
//     borderColor: "#919191",
//     borderRadius: 25,
//     height: 50,
//     marginBottom: 20,
//     justifyContent: "center",
//     padding: 20
//   },
//   inputText: {
//     height: 50,
//     color: "#000"
//   },
//   forgot: {
//     color: "#463a66",
//     fontSize: 11
//   },
//   signup: {
//     color: "#463a66",
//     fontSize: 11
//   },
//   loginBtn: {
//     width: "80%",
//     backgroundColor: "#fb5b5a",
//     borderRadius: 25,
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 40,
//     marginBottom: 10
//   },
//   loginText: {
//     color: "white"
//   }
// });
