import { NavigationContainer } from "@react-navigation/native";
import {
  AspectRatio,
  Box,
  Flex,
  HamburgerIcon,
  Image,
  Menu,
  NativeBaseProvider,
  Pressable,
  ScrollView,
} from "native-base";
import React from "react";
import Block from "./components/Block/Block";

const logo = require("./assets/mino-logo.png");
const foodImg = require("./assets/food.jpg");
const sleepImg = require("./assets/sleep.jpg");
const outsideImg = require("./assets/outside.jpg");

const HomeScreen = () => {};

export default () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Flex
          direction="row"
          justify="space-between"
          borderColor="coolGray.200"
          borderWidth="1"
          backgroundColor="#f9f9f9"
        >
          <Box w="15%" m="5">
            <AspectRatio w="100%" ratio={3 / 3}>
              <Image
                source={{
                  uri: logo,
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
          <Box w="25%" m="10" alignItems="flex-end">
            <Menu
              w="190"
              trigger={(triggerProps) => {
                return (
                  <Pressable
                    accessibilityLabel="More options menu"
                    {...triggerProps}
                  >
                    <HamburgerIcon />
                  </Pressable>
                );
              }}
            >
              <Menu.Item>Home</Menu.Item>
              <Menu.Item>About</Menu.Item>
              <Menu.Item>Contact</Menu.Item>
            </Menu>
          </Box>
        </Flex>
        <ScrollView>
          <Block img={foodImg} textToSpeak="I want food" />
          <Block img={sleepImg} textToSpeak="I want to sleep" />
          <Block img={outsideImg} textToSpeak="I want to go outside" />
        </ScrollView>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};
