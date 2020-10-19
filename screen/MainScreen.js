import React, { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import Output from "../components/Output";
import Card from "../components/Card";
import colors from "../constants/colors";

const randomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min)) + min;
  if (random === exclude) {
    return randomNumber(min, max, exclude);
  } else {
    return random;
  }
};

const MainScreen = (props) => {
  const [guess, setguess] = useState(randomNumber(1, 100, props.userInput));
  const [round, setRound] = useState(0);
  const low = useRef(1);
  const high = useRef(100);

  const { userInput, onGameOver } = props;

  useEffect(() => {
    if (guess === userInput) {
      onGameOver(round);
    }
  }, [guess, userInput, onGameOver]);

  const trueGuessHandler = (direction) => {
    if (
      (direction === "lower" && guess < userInput) ||
      (direction === "higher" && guess > userInput)
    ) {
      Alert.alert("Don't lie!", "You Know that is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      high.current = guess;
    } else {
      low.current = guess;
    }
    const newNumber = randomNumber(low.current, high.current, guess);
    setguess(newNumber);
    setRound((curRound) => curRound + 1);
  };

  return (
    <View style={styles.screenRoot}>
      <Card style={styles.card}>
        <Text style={styles.cardTitel}> Opponent's Guess</Text>
        <Output>{guess}</Output>
        <Text style={styles.cardSubTitel}>
          It's lower or higher then Entered number
        </Text>
        <View style={styles.buttonGroup}>
          <View style={styles.buttonView}>
            <Button
              title="LOWER"
              color={colors.lowerButton}
              onPress={trueGuessHandler.bind(this, "lower")}
            />
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Higher"
              color={colors.higherButton}
              onPress={trueGuessHandler.bind(this, "higher")}
            />
          </View>
        </View>
      </Card>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  screenRoot: {
    flex: 1,
    alignItems: "center",
  },
  buttonGroup: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 33,
    marginVertical: 10,
  },
  buttonView: {
    width: "30%",
  },
  card: {
    alignItems: "center",
    width: "80%",
    marginVertical: "60%",
  },
  cardTitel: {
    fontStyle: "italic",
    fontSize: 15,
    fontWeight: "bold",
    color: colors.text,
  },
  cardSubTitel: {
    fontStyle: "italic",
    fontSize: 14,
    fontWeight: "bold",
    color: colors.text,
    marginVertical: 5,
  },
});
export default MainScreen;
