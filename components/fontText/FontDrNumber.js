import React from "react";
import { StyleSheet, Text } from "react-native";

const FontDrNumber = (props) => {
  return (
    <Text style={{ ...styles.font, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  font: {
    fontFamily: "Didone-RoomNumbers",
  },
});

export default FontDrNumber;
