import React from "react";
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import FontSworeGames from "./fontText/FontSworeGames";

const CustomButton = (props) => {
  let ButtonClickStyle = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version > 21) {
    ButtonClickStyle = TouchableNativeFeedback;
  }

  return (
    <View style={styles.buttonContainer}>
      <ButtonClickStyle activeOpacity={0.6} onPress={props.onPress}>
        <View style={{ ...styles.button, ...props.style }}>
          <FontSworeGames style={{ ...styles.buttonText, ...props.style }}>
            {props.children}
          </FontSworeGames>
          {props.icon}
        </View>
      </ButtonClickStyle>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 12,
    overflow: "hidden",
  },
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
