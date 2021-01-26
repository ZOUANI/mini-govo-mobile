import React, { useState } from "react";
import * as Font from "expo-font";
import Navigator from "./src/routes/drawer";
import { AuthContext } from "./src/components/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { AppLoading } from "expo";
// import { DrawerContent } from './screens/DrawerContent';

// const getFonts = () =>
//   Font.loadAsync({
//     "nunito-regular": require("./src/assets/fonts/Nunito-Regular.ttf"),
//     "nunito-bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
//   });

export default function App() {
  // const AuthContext = React.createContext();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const initialLoginState = {
    isLoading: true,
    email: null,
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
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          email: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          email: action.id,
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
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem("userToken");
        console.log("USER TOKEN == ", userToken);
      } catch (e) {
        console.log(e);
      }

      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (foundUser) => {
        const userToken = String(foundUser.userToken);
        const email = foundUser.email;

        try {
          await AsyncStorage.setItem("userToken", userToken);
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGIN", id: email, token: userToken });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGOUT" });
      },
      signUp: async (foundUser) => {
        const userToken = String(foundUser.userToken);
        const email = foundUser.email;
        try {
          await AsyncStorage.setItem("userToken", userToken);
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "REGISTER", id: email, token: userToken });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <Navigator loginState={loginState} />
    </AuthContext.Provider>
  );
}
