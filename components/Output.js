import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";
import FontDrNumber from "./fontText/FontDrNumber";

const Output = (props) => {
  return (
    <View style={styles.output}>
      <FontDrNumber style={styles.text}>{props.children}</FontDrNumber>
    </View>
  );
};

const styles = StyleSheet.create({
  output: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginVertical: 12,
    borderWidth: 3,
    borderRadius: 8,
    borderColor: colors.numberText,
  },
  text: {
    color: colors.numberText,
    fontSize: 35,
  },
});
export default Output;
