import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StatingScreen from "./screen/StatingScreen";
import MainScreen from "./screen/MainScreen";
import EndScreen from "./screen/EndScreen";
import colors from "./constants/colors";
import { AppLoading } from "expo";
import * as Font from "expo-font";

const customFonts = () => {
  return Font.loadAsync({
    "Didone-RoomNumbers": require("./assets/fonts/DidoneRoomNumbers-Decorative.otf"),
    "Birdy-Game": require("./assets/fonts/Birdy-Game.ttf"),
    "Swore-Games": require("./assets/fonts/Swore-Games.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [enteredNumber, setEnteredNumber] = useState();
  const [rounds, setRounds] = useState(0);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={customFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const newGameHandler = () => {
    setRounds(0);
    setEnteredNumber(null);
  };

  const startHandler = (finalNumber) => {
    setEnteredNumber(finalNumber);
  };

  const gameOverHandler = (totalRound) => {
    setRounds(totalRound);
  };

  let screen = <StatingScreen onStart={startHandler} />;

  if (enteredNumber && rounds <= 0) {
    screen = (
      <MainScreen userInput={enteredNumber} onGameOver={gameOverHandler} />
    );
  } else if (rounds > 0) {
    screen = (
      <EndScreen
        roundsNumber={rounds}
        yourNumber={enteredNumber}
        onNewGame={newGameHandler}
      />
    );
  }

  return (
    <View style={styles.root}>
      <Header titel="Number Guessing Game" />
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
