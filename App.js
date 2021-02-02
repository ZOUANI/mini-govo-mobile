import React, { useState } from "react";
// import * as Font from "expo-font";
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
  // const [fontsLoaded, setFontsLoaded] = useState(false);

  const initialLoginState = {
    isLoading: true,
    email: null,
    role_id: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          email: action.email,
          role_id: action.role_id,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          email: action.id,
          role_id: action.role_id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          email: null,
          userToken: null,
          role_id: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          email: action.id,
          role_id: action.role_id,
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
      let mUser;
      let email = null;
      let role_id = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
        connectedUser = await AsyncStorage.getItem("connectedUser");
        if (connectedUser != null) {
          mUser = JSON.parse(connectedUser);
          email = mUser.email;
          role_id = mUser.role_id;
          // console.log("user == ", mUser);
        }
        // console.log("USER  ==>>>>>>>>>> ", userToken);
      } catch (e) {
        console.log(e);
      }

      dispatch({
        type: "RETRIEVE_TOKEN",
        token: userToken,
        email: email,
        role_id: role_id,
      });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (foundUser) => {
        const userToken = String(foundUser.userToken);
        const email = foundUser.email;
        const role_id = foundUser.role_id;
        const mUser = foundUser;
        try {
          await AsyncStorage.setItem("userToken", userToken);
          await AsyncStorage.setItem("connectedUser", JSON.stringify(mUser));
        } catch (e) {
          console.log(e);
        }
        dispatch({
          type: "LOGIN",
          id: email,
          token: userToken,
          role_id: role_id,
        });
      },
      signOut: async () => {
        // const emptyProducts = [];
        try {
          await AsyncStorage.removeItem("userToken");
          await AsyncStorage.removeItem("connectedUser");
          // await AsyncStorage.setItem("products", JSON.stringify(emptyProducts));
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGOUT" });
      },
      signUp: async (foundUser) => {
        const userToken = String(foundUser.userToken);
        const email = foundUser.email;
        const role_id = foundUser.role_id;
        const mUser = foundUser;
        try {
          await AsyncStorage.setItem("userToken", userToken);
          await AsyncStorage.setItem("connectedUser", JSON.stringify(mUser));
        } catch (e) {
          console.log(e);
        }
        dispatch({
          type: "REGISTER",
          id: email,
          token: userToken,
          role_id: role_id,
        });
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
