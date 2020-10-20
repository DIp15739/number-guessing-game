import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import FontSworeGames from "../components/fontText/FontSworeGames";
import FontBirdyGame from "../components/fontText/FontBirdyGame";
import { StyleSheet } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
import Output from "../components/Output";
import colors from "../constants/colors";

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
        <Button
          title="START GAME"
          color={colors.higherButton}
          onPress={() => props.onStart(finalNumber)}
        />
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
              <Button
                title="CONFIRM"
                onPress={confirmHendler}
                color={Colors.success}
              />
            </View>
            <View style={styles.buttonView}>
              <Button
                title="RESET"
                onPress={resetHandler}
                color={Colors.danger}
              />
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
    color: colors.text,
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
    width: "30%",
  },
  output: {
    marginTop: 20,
    alignItems: "center",
  },
  outputNumber: {
    marginVertical: 20,
  },
  outputText: {
    color: colors.text,
    fontSize: 19,
    marginVertical: 5,
  },
});
export default StatingScreen;
