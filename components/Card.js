import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import colors from "../constants/colors";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 15,
    padding: 20,
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
});
export default Card;
