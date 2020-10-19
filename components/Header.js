import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

const Header = (props) => {
  return (
    <View style={styles.headerRoot}>
      <Text style={styles.headerText}>{props.titel}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  headerRoot: {
    width: "100%",
    padding: 40,
    paddingTop: 50,
    height: 80,
    backgroundColor: colors.primary,
    alignItems: "center",
  },
  headerText: {
    color: colors.text,
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Header;
