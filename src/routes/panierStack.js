import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Panier from "../screens/panier";
import SubmitOrder from "../screens/submitOrder";
import Header from "../components/header";

const Stack = createStackNavigator();

export default function PanierStack() {
  return (
    <Stack.Navigator
      initialRouteName="Panier"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f7a21a",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Panier"
        component={Panier}
        options={({ navigation }) => ({
          headerTitle: () => (
            <Header navigation={navigation} title="Mon Panier" />
          ),
        })}
      />
      <Stack.Screen
        name="SubmitOrder"
        component={SubmitOrder}
        options={({ route }) => ({ title: "Finaliser la commande" })}
        // options={({ navigation }) => ({
        //   headerTitle: () => (
        //     <Header navigation={navigation} title="Finaliser la commanndeee" />
        //   ),
        // })}
      />
    </Stack.Navigator>
  );
}
