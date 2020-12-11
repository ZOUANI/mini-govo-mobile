import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Login from "../screens/login";
import Register from "../screens/signup";
import AffectedTasks from "../screens/tasks";
import MyTasks from "../screens/tasks/myTasks";
import Products from "../screens/products";
import Header from "../components/header";
import TaskDetails from "../screens/tasks/taskDetails";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TasksTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          //   height: 55,
          backgroundColor: "#f7a21a",
        },
        activeTintColor: "#fff",
        inactiveTintColor: "#fff",
      }}
    >
      <Tab.Screen name="Tâches  affectées" component={AffectedTasks} />
      <Tab.Screen name="Mes Tâches" component={MyTasks} />
    </Tab.Navigator>
  );
}

export default function CollaborateurStack() {
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
        name="AffectedTasks"
        component={TasksTabs}
        options={({ navigation }) => ({
          headerTitle: () => (
            <Header navigation={navigation} title="Les Tâches" />
          ),
        })}
      />
      <Stack.Screen
        name="TaskDetails"
        component={TaskDetails}
        options={{ title: "Détails de la tâche" }}
      />
    </Stack.Navigator>
  );
}
