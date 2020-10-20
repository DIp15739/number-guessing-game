import React from "react";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, View } from "react-native";
import FontSworeGames from "../components/fontText/FontSworeGames";
import colors from "../constants/colors";
import Card from "../components/Card";
import Output from "../components/Output";
import CustomButton from "../components/CustomButton";

const EndScreen = (props) => {
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/img/game-over.png")}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
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
      <View style={styles.buttonView}>
        <CustomButton onPress={props.onNewGame} style={styles.button}>
          new game
        </CustomButton>
      </View>
      <StatusBar style="light" />
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
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
  buttonView: {
    width: "59%",
    marginTop: 15,
    elevation: 15,
  },
  button: {
    backgroundColor: colors.higherButton,
    paddingVertical: 7,
    paddingHorizontal: 20,
    color: colors.text,
    fontSize: 23,
  },
  imageContainer: {
    width: "80%",
    height: 200,
    marginTop: 70,
    marginBottom: 20,
    elevation: 15,
    backgroundColor: colors.primary,
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default EndScreen;
