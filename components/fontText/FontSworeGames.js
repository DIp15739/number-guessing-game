import React from "react";
import { StyleSheet, Text } from "react-native";

const FontSworeGames = (props) => {
  return (
    <Text style={{ ...styles.font, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  font: {
    fontFamily: "Swore-Games",
  },
});

export default FontSworeGames;
