import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MesCommandes from "../screens/commandes";
import commandeDetails from "../screens/commandes/commandeDetails";
import suivieCommande from "../screens/commandes/suivieCommande";
import Header from "../components/header";

const Stack = createStackNavigator();

export default function CommandeStack() {
  return (
    <Stack.Navigator
      initialRouteName="MesCommandes"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f7a21a",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="MesCommandes"
        component={MesCommandes}
        options={({ navigation }) => ({
          headerTitle: () => (
            <Header navigation={navigation} title="Mes Commandes" />
          ),
        })}
      />
      <Stack.Screen
        name="CommandeDetails"
        component={commandeDetails}
        options={({ route }) => ({ title: "Détails de la commande" })}
      />
      <Stack.Screen
        name="suivieCommande"
        component={suivieCommande}
        options={({ route }) => ({ title: "Suivie de la commande" })}
      />
    </Stack.Navigator>
  );
}
