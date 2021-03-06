import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";
import FontSworeGames from "./fontText/FontSworeGames";

const Header = (props) => {
  return (
    <View style={styles.headerRoot}>
      <FontSworeGames style={styles.headerText}>{props.titel}</FontSworeGames>
    </View>
  );
};
const styles = StyleSheet.create({
  headerRoot: {
    width: "100%",
    paddingTop: 45,
    height: 90,
    backgroundColor: colors.primary,
    alignItems: "center",
  },
  headerText: {
    color: colors.text,
    fontSize: 25,
  },
});

export default Header;
