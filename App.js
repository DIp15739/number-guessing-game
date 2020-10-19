import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StatingScreen from "./screen/StatingScreen";
import MainScreen from "./screen/MainScreen";
import EndScreen from "./screen/EndScreen";
import colors from "./constants/colors";

export default function App() {
  const [enteredNumber, setEnteredNumber] = useState();
  const [rounds, setRounds] = useState(0);

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
