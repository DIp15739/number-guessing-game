import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import FontSworeGames from "../components/fontText/FontSworeGames";
import FontBirdyGame from "../components/fontText/FontBirdyGame";
import { StyleSheet } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Output from "../components/Output";
import colors from "../constants/colors";
import CustomButton from "../components/CustomButton";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const StatingScreen = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [finalNumber, setfinalNumber] = useState();

  const inputValueHandler = (inputText) => {
    setInputValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetHandler = () => {
    setInputValue("");
    setConfirm(false);
  };

  const confirmHendler = () => {
    const finalNumber = parseInt(inputValue);
    if (isNaN(finalNumber) || finalNumber <= 0 || finalNumber > 99) {
      Alert.alert("Invalid number", "Enter number between 1 & 99", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }
    setConfirm(true);
    setfinalNumber(finalNumber);
    setInputValue("");
    Keyboard.dismiss();
  };

  let output;
  if (confirm) {
    output = (
      <Card style={styles.output}>
        <FontSworeGames style={styles.outputText}>
          selected number
        </FontSworeGames>
        <Output style={styles.outputNumber}>{finalNumber}</Output>
        <CustomButton
          style={styles.startButton}
          onPress={() => props.onStart(finalNumber)}
          icon={
            <Ionicons
              name="logo-game-controller-b"
              size={20}
              color={colors.text}
              style={{ paddingRight: 4 }}
            />
          }>
          start game
        </CustomButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screenRoot}>
        <FontBirdyGame style={styles.screenTitel}>
          Start a new Game
        </FontBirdyGame>
        <Card style={styles.card}>
          <FontSworeGames style={styles.cardTitel}>
            Enter a Number
          </FontSworeGames>
          <Input
            style={styles.input}
            keyboardType="number-pad"
            blurOnSubmit
            autoCorrect={false}
            maxLength={2}
            onChangeText={inputValueHandler}
            value={inputValue}
          />
          <View style={styles.buttonGroup}>
            <View style={styles.buttonView}>
              <CustomButton
                style={styles.confirmButton}
                onPress={confirmHendler}
                icon={
                  <MaterialIcons
                    name="cloud-done"
                    size={20}
                    color={colors.text}
                    style={styles.icon}
                  />
                }>
                Confirm
              </CustomButton>
            </View>
            <View style={styles.buttonView}>
              <CustomButton
                style={styles.resetButton}
                onPress={resetHandler}
                icon={
                  <MaterialCommunityIcons
                    name="reload"
                    size={20}
                    color={colors.text}
                  />
                }>
                reset
              </CustomButton>
            </View>
          </View>
        </Card>
        {output}
        <StatusBar style="light" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screenRoot: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  screenTitel: {
    fontSize: 26,
    marginTop: 30,
    marginBottom: 10,
    color: colors.wihite,
  },
  card: {
    width: "90%",
    alignItems: "center",
    marginVertical: 15,
  },
  cardTitel: {
    fontSize: 18,
    color: colors.text,
  },
  input: {
    width: "50%",
    textAlign: "center",
  },
  buttonGroup: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  buttonView: {
    width: "40%",
    elevation: 30,
  },
  confirmButton: {
    backgroundColor: colors.success,
    paddingVertical: 5,
    paddingHorizontal: 3,
    color: colors.text,
    fontSize: 15,
  },
  resetButton: {
    backgroundColor: colors.danger,
    paddingVertical: 5,
    paddingHorizontal: 6,
    color: colors.text,
    fontSize: 15,
  },
  output: {
    marginTop: 20,
    alignItems: "center",
  },
  outputNumber: {
    marginVertical: 22,
  },
  outputText: {
    color: colors.text,
    fontSize: 19,
    marginVertical: 5,
  },
  startButton: {
    backgroundColor: colors.higherButton,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: colors.text,
    fontSize: 16,
  },
  icon: {
    paddingLeft: 5,
  },
});
export default StatingScreen;
