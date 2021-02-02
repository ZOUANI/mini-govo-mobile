import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./authStack";
import HomeStack from "./homeStack";
import PanierStack from "./panierStack";
import CommandeStack from "./commandeStack";
import CollaborateurStack from "./collaborateurStack";
import { DrawerContent } from "../screens/drawerContent";

const Drawer = createDrawerNavigator();

export default function Navigator(props) {
  const [mState, setMState] = React.useState({});

  React.useEffect(() => {
    console.log("============== LOGIN STATE ==============");
    console.log(props.loginState);
    console.log("=========================================");
    setMState(props.loginState);
  }, [props.loginState]);

  return (
    <NavigationContainer>
      {props.loginState.userToken !== null ? (
        <React.Fragment>
          {props.loginState.role_id != 3 ? (
            <Drawer.Navigator
              drawerContent={(props) => (
                <DrawerContent {...props} mState={mState} />
              )}
              initialRouteName="Home"
            >
              <Drawer.Screen
                name="Home"
                options={{ title: "Catégories" }}
                component={HomeStack}
              />
              <Drawer.Screen
                name="Panier"
                options={{ title: "Mon panier" }}
                component={PanierStack}
              />
              <Drawer.Screen
                name="MesCommandes"
                options={{ title: "Mes commandes" }}
                component={CommandeStack}
              />
            </Drawer.Navigator>
          ) : (
            <Drawer.Navigator
              drawerContent={(props) => (
                <DrawerContent {...props} mState={mState} />
              )}
              initialRouteName="Tasks"
            >
              <Drawer.Screen
                name="Tasks"
                options={{ title: "Mes tâches" }}
                component={CollaborateurStack}
              />
            </Drawer.Navigator>
          )}
        </React.Fragment>
      ) : (
        <Drawer.Navigator
          drawerContent={(props) => (
            <DrawerContent {...props} mState={mState} />
          )}
          initialRouteName="Home"
        >
          <Drawer.Screen
            name="Home"
            options={{ title: "Catégories" }}
            component={HomeStack}
          />
          <Drawer.Screen
            name="Panier"
            options={{ title: "Mon panier" }}
            component={PanierStack}
          />
          <Drawer.Screen
            name="Auth"
            // options={{ title: "Auth" }}
            component={AuthStack}
          />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}
