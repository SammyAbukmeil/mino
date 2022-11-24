import { NavigationContainer } from "@react-navigation/native";
import {
  Box,
  Flex,
  HamburgerIcon,
  Menu,
  NativeBaseProvider,
  Pressable,
  ScrollView,
} from "native-base";
import { Image, View, Platform, StatusBar } from "react-native";
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
        <View
          style={{
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            paddingBottom: 100,
          }}
        >
          <Flex
            direction="row"
            justify="space-between"
            borderColor="coolGray.200"
            borderWidth="1"
            backgroundColor="#f9f9f9"
          >
            <Box w="15%" m="5">
              <Image
                source={logo}
                alt="Mino Logo"
                style={{ width: 60, height: 60 }}
              />
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
                      <HamburgerIcon
                        borderColor="coolGray.200"
                        borderWidth="5"
                      />
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
            {/* <Block img={outsideImg} textToSpeak="I want to listen to music" />
            <Block img={outsideImg} textToSpeak="I want to play on a phone" />
            <Block img={outsideImg} textToSpeak="I want to play on a phone" /> */}
          </ScrollView>
        </View>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};
