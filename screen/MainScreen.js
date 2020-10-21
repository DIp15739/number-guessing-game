import React, { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Alert, ScrollView, Text } from "react-native";
import FontSworeGames from "../components/fontText/FontSworeGames";
import FontBirdyGame from "../components/fontText/FontBirdyGame";
import FontDrNumber from "../components/fontText/FontDrNumber";
import Output from "../components/Output";
import Card from "../components/Card";
import colors from "../constants/colors";
import CustomButton from "../components/CustomButton";
import { Fontisto } from "@expo/vector-icons";

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

const roundListItem = (value, numOfRound) => (
  <Card key={value} style={styles.listItem}>
    <FontSworeGames style={styles.listItemText}>
      Round number {"  " + "#" + numOfRound}
    </FontSworeGames>
    <FontDrNumber style={styles.listItemNumber}>{value}</FontDrNumber>
  </Card>
);

const MainScreen = (props) => {
  const initialGuess = randomNumber(1, 100, props.userInput);
  const [guess, setguess] = useState(initialGuess);
  const [roundList, setRoundList] = useState([initialGuess]);
  const low = useRef(1);
  const high = useRef(100);

  const { userInput, onGameOver } = props;

  useEffect(() => {
    if (guess === userInput) {
      onGameOver(roundList.length);
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
      low.current = guess + 1;
    }
    const newNumber = randomNumber(low.current, high.current, guess);
    setguess(newNumber);
    setRoundList((curRound) => [newNumber, ...curRound]);
  };

  return (
    <View style={styles.screenRoot}>
      <Card style={styles.card}>
        <FontBirdyGame style={styles.cardTitel}>Opponent's Guess</FontBirdyGame>
        <Output>{guess}</Output>
        <FontSworeGames style={styles.cardSubTitel}>
          Entered number is HIGHER or LOWER
        </FontSworeGames>
        <View style={styles.buttonGroup}>
          <View style={styles.buttonView}>
            <CustomButton
              style={styles.lowerButton}
              onPress={trueGuessHandler.bind(this, "lower")}
              icon={<Fontisto name="dislike" size={13} color={colors.text} />}>
              lower
            </CustomButton>
          </View>
          <View style={styles.buttonView}>
            <CustomButton
              style={styles.higherButton}
              onPress={trueGuessHandler.bind(this, "higher")}
              icon={<Fontisto name="like" size={13} color={colors.text} />}>
              higher
            </CustomButton>
          </View>
        </View>
      </Card>
      <View style={styles.scrollViewContainer}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {roundList.map((round, index) =>
            roundListItem(round, roundList.length - index)
          )}
        </ScrollView>
      </View>
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
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  buttonView: {
    width: "40%",
    elevation: 10,
  },
  lowerButton: {
    backgroundColor: colors.lowerButton,
    paddingVertical: 5,
    paddingHorizontal: 6,
    color: colors.text,
    fontSize: 15,
  },
  higherButton: {
    backgroundColor: colors.higherButton,
    paddingVertical: 5,
    paddingHorizontal: 6,
    color: colors.text,
    fontSize: 15,
  },
  card: {
    alignItems: "center",
    width: "83%",
    marginTop: 40,
  },
  cardTitel: {
    fontSize: 25,
    color: colors.text,
  },
  cardSubTitel: {
    fontSize: 17,
    color: colors.text,
    marginVertical: 10,
  },
  scrollViewContainer: {
    width: "70%",
    marginTop: 30,
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  listItem: {
    marginVertical: 9,
    flexDirection: "row",
    elevation: 3,
    padding: 15,
    justifyContent: "space-between",
  },
  listItemText: {
    color: colors.text,
    fontSize: 17,
  },
  listItemNumber: {
    color: colors.text,
    fontSize: 22,
  },
});
export default MainScreen;
