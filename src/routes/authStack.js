import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/login";
import Register from "../screens/signup";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      // screenOptions={{
      //   headerStyle: {
      //     backgroundColor: "#f7a21a",
      //   },
      //   headerTintColor: "#fff",
      // }}
    >
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
