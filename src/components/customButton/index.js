import React from "react";
import { TouchableHighlight, Image, Text, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

export default function CustomButton(props) {
  return (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      onPress={props.onPress}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Commander</Text>
      </View>
    </TouchableHighlight>
  );
}

// customButton.propTypes = {
//   onPress: PropTypes.func,
//   source: PropTypes.number,
//   title: PropTypes.string,
// };
