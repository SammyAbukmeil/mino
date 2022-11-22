import { extendTheme, NativeBaseProvider, ScrollView } from "native-base";
import React from "react";
import Block from "./components/Block/Block";

const theme = extendTheme({});

// const foodImg = require("./assets/food.jpg");
const foodImg =
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80";

// const sleepImg = require("./assets/sleep.jpg");
const sleepImg =
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const outsideImg =
  "https://images.unsplash.com/photo-1594498653385-d5172c532c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";

export default () => {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Block img={foodImg} textToSpeak="I want food" />
        <Block img={sleepImg} textToSpeak="I want to sleep" />
        <Block img={outsideImg} textToSpeak="I want to go outside" />
      </ScrollView>
    </NativeBaseProvider>
  );
};
