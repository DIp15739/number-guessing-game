import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import FontSworeGames from "./fontText/FontSworeGames";

const CustomButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={{ ...styles.button, ...props.style }}>
        <FontSworeGames style={{ ...styles.buttonText, ...props.style }}>
          {props.children}
        </FontSworeGames>
        {props.icon}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textTransform: "uppercase",
    textAlign: "center",
    alignItems: "center",
  },
});

export default CustomButton;

/*  
add style for use button
    backgroundColor: ,
    paddingVertical: ,
    paddingHorizontal: ,
    color: ,
    fontSize: ,
add style for button View
    width: ,
    elevation: ,
*/
