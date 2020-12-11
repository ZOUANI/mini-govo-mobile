// import { StyleSheet } from "react-native";
// import { ProductCard } from "../../AppStyles";

import { StyleSheet, Dimensions } from "react-native";

// screen sizing
const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 20;

const commandCard = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
    width: "95%",
    // height: 100,
    backgroundColor: "#fff",
    // borderRadius: 10,
  },
  fielsContainer1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  referenceField: {
    fontFamily: "nunito-bold",
    color: "#808080",
    fontSize: 13,
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  referenceValue: {
    fontFamily: "nunito-bold",
    fontSize: 13,

    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  dateField: {
    fontFamily: "nunito-bold",
    fontSize: 13,

    color: "#808080",
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  dateValue: {
    fontFamily: "nunito-bold",
    fontSize: 13,
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  statusField: {
    fontFamily: "nunito-bold",
    fontSize: 13,

    color: "#808080",
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  statusValue: {
    fontFamily: "nunito-bold",
    color: "#F3710B",
    fontSize: 13,
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  fielsContainer2: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  fielsContainer3: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  totalField: {
    fontFamily: "nunito-bold",
    color: "#808080",
    fontSize: 13,
    marginTop: 3,
    marginLeft: "19%",
  },
  produitsField: {
    fontFamily: "nunito-bold",
    color: "#808080",
    fontSize: 13,
    marginTop: 3,
    marginLeft: 5,
  },
  totalValue: {
    fontFamily: "nunito-bold",
    fontSize: 13,
    marginTop: 3,
    marginLeft: "36%",
  },
  produitsValue: {
    fontFamily: "nunito-bold",
    fontSize: 13,
    marginTop: 3,
    marginLeft: 5,
  },
  fielsContainer4: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  dateLivraisonMessage: {
    fontFamily: "nunito-bold",
    color: "#808080",
    fontSize: 14,
    marginTop: 3,
    marginLeft: 5,
  },
  DateLivraisonValue: {
    fontFamily: "nunito-bold",
    color: "#000",
  },
});
const commandDetails = StyleSheet.create({
  produitContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
    width: "95%",
    // height: 100,
    backgroundColor: "#fff",
    // borderRadius: 10,
  },
  produitPhoto: {
    flex: 1,
    justifyContent: "flex-start",
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  produitTitre: {
    flex: 1,
    fontFamily: "nunito-bold",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "left",
    color: "#F3710B",
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  produitQuantite: {
    flex: 1,
    fontFamily: "nunito-bold",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "left",
    color: "#808080",
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  produitPrix: {
    flex: 1,
    fontFamily: "nunito-bold",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "left",
    color: "#808080",
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
});

const commandSuivie = StyleSheet.create({
  box: {
    // // marginTop: 10,
    // flexDirection: "row",
    // justifyContent: "space-around",

    width: "100%",
    height: 100,
    backgroundColor: "#DCDCDC",
    // borderRadius: 10,
  },
  fieldContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  valeurContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  SuivieReferenceField: {
    fontFamily: "nunito-bold",
    color: "#808080",
    fontSize: 13,
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  SuivieReferenceValue: {
    fontFamily: "nunito-bold",
    color: "#000",
    fontSize: 13,
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  statusContainer: {
    // flex: 1,

    flexDirection: "column",
    justifyContent: "center",
    // borderTopLeftRadius: 10,
    // borderBottomLeftRadius: 10,
    // borderBottomLeftRadius: 0,
    // borderBottomRightRadius: 0,
  },
  appButtonContainer: {
    flex: 1,
    elevation: 5,
    alignItems: "center",
    backgroundColor: "#f7a21a",
    margin: 10,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    paddingVertical: 5,
    textTransform: "uppercase",
  },
});

const styles = StyleSheet.create({
  fielsContainer1: commandCard.fielsContainer1,
  fielsContainer2: commandCard.fielsContainer2,
  fielsContainer3: commandCard.fielsContainer3,
  fielsContainer4: commandCard.fielsContainer4,
  container: commandCard.container,
  referenceField: commandCard.referenceField,
  referenceValue: commandCard.referenceValue,
  dateField: commandCard.dateField,
  dateValue: commandCard.dateValue,
  statusField: commandCard.statusField,
  statusValue: commandCard.statusValue,
  totalField: commandCard.totalField,
  produitsField: commandCard.produitsField,
  totalValue: commandCard.totalValue,
  produitsValue: commandCard.produitsValue,
  dateLivraisonMessage: commandCard.dateLivraisonMessage,
  DateLivraisonValue: commandCard.DateLivraisonValue,
  ProduitPhoto: commandDetails.produitPhoto,
  produitTitre: commandDetails.produitTitre,
  produitQuantite: commandDetails.produitQuantite,
  produitPrix: commandDetails.produitPrix,
  box: commandSuivie.box,
  SuivieReferenceField: commandSuivie.SuivieReferenceField,
  fieldContainer: commandSuivie.fieldContainer,
  valeurContainer: commandSuivie.valeurContainer,
  SuivieReferenceValue: commandSuivie.SuivieReferenceValue,
  statusContainer: commandSuivie.statusContainer,
  appButtonContainer: commandSuivie.appButtonContainer,
  appButtonText: commandSuivie.appButtonContainer,
});

export default styles;
