import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  const [luckyNumber, setLuckyNumber] = useState(0)
  const [luckyNumberImage, setLuckyNumberImage] = useState(require("./assets/dice-images/smiley.png"))
  const [winningNumberImage, setWinningNumberImage] = useState(require("./assets/dice-images/smiley.png"))
  const [status, setStatus] = useState('To see if you are lucky')

  function isLucky(randomNumber) {
    luckyNumber === randomNumber
      ? setStatus('Congrats! You are so lucky!')
      : setStatus('Noup! Better luck next time!')
  }

  function randomLuckyNumber() {
    setStatus('Good work. You have the number now...')
    let randomNumber = Math.floor(Math.random() * 6 + 1)
    setLuckyNumber(randomNumber)
    switch(randomNumber) {
      case 1: setLuckyNumberImage(require("./assets/dice-images/1.png")); break;
      case 2: setLuckyNumberImage(require("./assets/dice-images/2.png")); break;
      case 3: setLuckyNumberImage(require("./assets/dice-images/3.png")); break;
      case 4: setLuckyNumberImage(require("./assets/dice-images/4.png")); break;
      case 5: setLuckyNumberImage(require("./assets/dice-images/5.png")); break;
      case 6: setLuckyNumberImage(require("./assets/dice-images/6.png")); break;
      default: break;
    }
  }

  function randomWinningNumber() {
    if (luckyNumber === 0) {
      setStatus('HEY! Throw the lucky number first!')
      return 0
    }
    else {
      let randomNumber = Math.floor(Math.random() * 6 + 1)
      isLucky(randomNumber)
      switch(randomNumber) {
        case 1: setLuckyNumberImage(require("./assets/dice-images/1.png")); break;
        case 2: setLuckyNumberImage(require("./assets/dice-images/2.png")); break;
        case 3: setLuckyNumberImage(require("./assets/dice-images/3.png")); break;
        case 4: setLuckyNumberImage(require("./assets/dice-images/4.png")); break;
        case 5: setLuckyNumberImage(require("./assets/dice-images/5.png")); break;
        case 6: setLuckyNumberImage(require("./assets/dice-images/6.png")); break;
        default: break;
      }
    }
  }

  function restart() {
    setLuckyNumberImage(require("./assets/dice-images/smiley.png"))
    setWinningNumberImage(require("./assets/dice-images/smiley.png"))
    setLuckyNumber(0)
    setStatus('To see if you are lucky')
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    marginBottom: 15
  },
  dice: {
    marginTop: 15,
    width: 80,
    height: 80,
    marginBottom: 15
  },
  status: {
    fontSize: 15,
    marginBottom: 25
  }
});
