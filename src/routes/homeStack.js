import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SuperCategories from "../screens/superCategories";
import Categories from "../screens/categories";
import Products from "../screens/products";
import Header from "../components/header";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f7a21a",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Home"
        component={SuperCategories}
        options={({ navigation }) => ({
          headerTitle: () => (
            <Header navigation={navigation} title="Super Categories" />
          ),
        })}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{ title: "Catégories" }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
}
