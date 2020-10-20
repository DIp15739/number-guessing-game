import React from "react";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import colors from "../constants/colors";

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    marginVertical: 20,
    borderBottomColor: colors.text,
    borderBottomWidth: 1,
    fontFamily: "Didone-RoomNumbers",
    borderStyle: "dotted",
    color: colors.text,
    fontSize: 30,
  },
});

export default Input;
