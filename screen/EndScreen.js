import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import FontSworeGames from "../components/fontText/FontSworeGames";
import FontBirdyGame from "../components/fontText/FontBirdyGame";
import colors from "../constants/colors";
import Card from "../components/Card";
import Output from "../components/Output";

const EndScreen = (props) => {
  return (
    <View style={styles.root}>
      <FontBirdyGame style={styles.text}>The Game is Over...</FontBirdyGame>
      <View style={styles.cardGroup}>
        <Card style={styles.output}>
          <FontSworeGames style={styles.outputText}>
            Number of rounds
          </FontSworeGames>
          <Output style={styles.outputNumber}>{props.roundsNumber}</Output>
        </Card>
        <Card style={styles.output}>
          <FontSworeGames style={styles.outputText}>Number was</FontSworeGames>
          <Output style={styles.outputNumber}>{props.yourNumber}</Output>
        </Card>
      </View>
      <View style={styles.button}>
        <Button
          title="NEW GAME"
          onPress={props.onNewGame}
          color={colors.higherButton}
        />
      </View>
      <StatusBar style="light" />
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 35,
    color: colors.text,
    marginBottom: 20,
  },
  cardGroup: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  output: {
    marginVertical: 20,
    alignItems: "center",
    width: "40%",
    height: 140,
  },
  outputNumber: {
    marginVertical: 20,
    //fontFamily: "Didone-RoomNumbers",
  },
  outputText: {
    color: colors.text,
    fontSize: 15,
    textAlign: "center",
    marginVertical: 5,
  },
  card: {
    width: "90%",
    alignItems: "center",
    marginVertical: 15,
  },
  button: {
    width: "40%",
    marginTop: 15,
  },
});

export default EndScreen;
