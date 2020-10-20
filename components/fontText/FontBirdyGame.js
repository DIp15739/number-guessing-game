import React from "react";
import { StyleSheet, Text } from "react-native";

const FontBirdyGame = (props) => {
  return (
    <Text style={{ ...styles.font, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  font: {
    fontFamily: "Birdy-Game",
  },
});

export default FontBirdyGame;
