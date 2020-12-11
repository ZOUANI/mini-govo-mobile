import React, { useState } from "react";
import { FlatList, Text, View, TouchableHighlight } from "react-native";
import { AppLoading } from "expo";
import styles from "./styles";
import * as Font from "expo-font";
import Dialog from "react-native-dialog";
import { tasks } from "../../data/dataArrays";

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("../../assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("../../assets/fonts/Nunito-Bold.ttf"),
  });

export default function AffectedTasks({ navigation }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  onPressTask = (item) => {
    setSelectedItem(item);
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  handleDelete = (item) => {
    console.log("handle delete");
  };

  renderTasks = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      onPress={() => onPressTask(item)}
    >
      <View style={styles.container}>
        <Text style={styles.taskTitle}>{item.nom}</Text>
        <View style={styles.taskDetailsRow}>
          <Text style={styles.taskDetailsText}>Commandée le :</Text>
          <Text style={styles.taskDetailsText}>15/11/2020</Text>
        </View>
        <View style={styles.taskDetailsRow}>
          <Text style={styles.taskDetailsText}>A livrer le :</Text>
          <Text style={styles.taskDetailsText}>20/11/2020</Text>
        </View>
        <View style={styles.taskDetailsRow}>
          <Text style={styles.taskDetailsText}>Quantité :</Text>
          <Text style={styles.taskDetailsText}>7 Unités</Text>
        </View>
      </View>
    </TouchableHighlight>
  );

  if (fontsLoaded) {
    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={tasks}
          renderItem={renderTasks}
          keyExtractor={(item) => `${item.id}`}
        />
        {visible && (
          <View>
            <Dialog.Container visible={visible}>
              <Dialog.Title>Détails de la tâche</Dialog.Title>
              <View style={{ flexDirection: "row" }}>
                <Dialog.Description style={styles.taskDialogText}>
                  Réference de la commande :
                </Dialog.Description>
                <Dialog.Description style={styles.taskDialogText}>
                  CMD-3654632/0003
                </Dialog.Description>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Dialog.Description style={styles.taskDialogText}>
                  Nom du produit :
                </Dialog.Description>
                <Dialog.Description style={styles.taskDialogText}>
                  {selectedItem.nom}
                </Dialog.Description>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Dialog.Description style={styles.taskDialogText}>
                  Date commande :
                </Dialog.Description>
                <Dialog.Description style={styles.taskDialogText}>
                  27/11/2020
                </Dialog.Description>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Dialog.Description style={styles.taskDialogText}>
                  Date livraison :
                </Dialog.Description>
                <Dialog.Description style={styles.taskDialogText}>
                  30/11/2020
                </Dialog.Description>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Dialog.Description style={styles.taskDialogText}>
                  Quantité :
                </Dialog.Description>
                <Dialog.Description style={styles.taskDialogText}>
                  3 Unités
                </Dialog.Description>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Dialog.Description style={styles.taskDialogText}>
                  Prix total :
                </Dialog.Description>
                <Dialog.Description style={styles.taskDialogText}>
                  1000.00 MAD
                </Dialog.Description>
              </View>
              <View style={{ paddingBottom: 22, flexDirection: "column" }}>
                <Dialog.Description style={{ fontSize: 14 }}>
                  Description :
                </Dialog.Description>
                <Dialog.Description style={{ marginLeft: 16, fontSize: 14 }}>
                  {selectedItem.description}
                </Dialog.Description>
              </View>
              <Dialog.Button label="Ignorer" onPress={handleCancel} />
              <Dialog.Button label="S'en charger" onPress={handleDelete} />
            </Dialog.Container>
          </View>
        )}
      </View>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
