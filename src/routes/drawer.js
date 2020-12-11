import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./homeStack";
import PanierStack from "./panierStack";
import CommandeStack from "./commandeStack";
import CollaborateurStack from "./collaborateurStack";
import { DrawerContent } from "../screens/drawerContent";

const Drawer = createDrawerNavigator();

export default function Navigator(props) {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
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
        <Drawer.Screen
          name="Tasks"
          options={{ title: "Mes tâches" }}
          component={CollaborateurStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
