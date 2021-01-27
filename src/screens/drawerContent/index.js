import React from "react";
import { View, StyleSheet } from "react-native";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import styles from "./styles";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { AuthContext } from "../../components/context";

export function DrawerContent(props) {
  const paperTheme = useTheme();

  React.useEffect(() => {
    console.log("mState from drawer content == ", props.mState);
  }, [props.mState]);

  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View
            style={{
              paddingLeft: 20,
              backgroundColor: "#f7a21a",
              height: 160,
              marginTop: -40,
            }}
          >
            <View style={{ flexDirection: "row", marginTop: 55 }}>
              <Avatar.Image
                source={{
                  uri:
                    "https://www.logoground.com/uploads6/dv6y2019292622019-12-304894023351.jpg",
                }}
                size={80}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>MINI GOVO</Title>
                <Caption style={styles.caption}>@govo_ma</Caption>
              </View>
            </View>

            {/* <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View> */}
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Accueil"
              onPress={() => {
                props.navigation.navigate("Home", { screen: "Home" });
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="cart-outline" color={color} size={size} />
              )}
              label="Mon panier"
              onPress={() => {
                props.navigation.navigate("Panier");
              }}
            />
            {props.mState.userToken !== null && (
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="script-text-outline" color={color} size={size} />
                )}
                label="Mes commandes"
                onPress={() => {
                  props.navigation.navigate("MesCommandes", {
                    screen: "MesCommandes",
                  });
                }}
              />
            )}

            {props.mState.userToken === null && (
              <View>
                <DrawerItem
                  icon={({ color, size }) => (
                    <Icon name="login" color={color} size={size} />
                  )}
                  label="Se connecter"
                  onPress={() => {
                    props.navigation.navigate("Auth", { screen: "Login" });
                  }}
                />
                <DrawerItem
                  icon={({ color, size }) => (
                    <Icon
                      name="account-plus-outline"
                      color={color}
                      size={size}
                    />
                  )}
                  label="Inscription"
                  onPress={() => {
                    props.navigation.navigate("Auth", { screen: "Register" });
                  }}
                />
              </View>
            )}
          </Drawer.Section>
          {props.mState.userToken !== null && (
            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon
                    name="calendar-text-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Tâches (Collab.)"
                onPress={() => {
                  props.navigation.navigate("Tasks", {
                    screen: "AffectedTasks",
                  });
                }}
              />
            </Drawer.Section>
          )}
        </View>
      </DrawerContentScrollView>
      {props.mState.userToken != null && (
        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="exit-to-app" color={color} size={size} />
            )}
            label="Logout"
            onPress={() => {
              signOut();
              props.navigation.navigate("Home", { screen: "Home" });
            }}
          />
        </Drawer.Section>
      )}
    </View>
  );
}
