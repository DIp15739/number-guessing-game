import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
import Card from "../components/Card";
import Output from "../components/Output";

const EndScreen = (props) => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>The Game is Over...</Text>
      <View style={styles.cardGroup}>
        <Card style={styles.output}>
          <Text style={styles.outputText}>Number of rounds</Text>
          <Output style={styles.outputNumber}>{props.roundsNumber}</Output>
        </Card>
        <Card style={styles.output}>
          <Text style={styles.outputText}>Number was</Text>
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
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "italic",
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
  },
  outputText: {
    color: colors.text,
    fontSize: 15,
    textAlign: "center",
    marginVertical: 5,
    fontStyle: "italic",
    fontWeight: "bold",
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
