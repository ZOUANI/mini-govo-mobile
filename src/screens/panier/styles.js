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

const ProductCard = StyleSheet.create({
  superContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // flexDirection: "column",
    // marginLeft: RECIPE_ITEM_MARGIN,
    // marginTop: 20,
    // width:
    //   (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) /
    //   recipeNumColums,
    // height: RECIPE_ITEM_HEIGHT + 75,
    // borderColor: "#cccccc",
    // borderWidth: 0.5,
    // borderRadius: 15,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    // marginLeft: RECIPE_ITEM_MARGIN,
    marginHorizontal: 10,
    marginTop: 10,
    width: "95%",
    height: 100,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 10,
  },
  //   qteContainer: {
  //     flex: 1,
  //     flexDirection: "row",
  //     backgroundColor: "#009bff",
  //   },
  //   qteSpinner: {
  //     alignItems: "center",
  //     backgroundColor: "#009bff",
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  photo: {
    flex: 1,
    width: "30%",
    // alignItems: "left",
    justifyContent: "flex-start",
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    // borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  title: {
    flex: 2,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "left",
    color: "#444444",
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  category: {
    marginTop: 5,
    marginBottom: 5,
  },
  appButtonContainer: {
    flex: 1,
    elevation: 8,
    // width: 180,
    justifyContent: "flex-end",
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
  container: ProductCard.container,
  photo: ProductCard.photo,
  title: ProductCard.title,
  category: ProductCard.category,
  appButtonContainer: ProductCard.appButtonContainer,
  appButtonText: ProductCard.appButtonText,
});

export default styles;
