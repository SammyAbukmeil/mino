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
import { Card, Button, Icon } from "@rneui/themed";
import Block from "./components/Block/Block";

const HomeScreen = () => {};

export default () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <View
          style={{
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            paddingBottom: 100,
            backgroundColor: "#f6f7fd",
          }}
        >
          <Flex
            direction="row"
            justify="space-between"
            borderColor="coolGray.200"
            borderWidth="1"
            backgroundColor="#f9f9f9"
          >
            <Card style={{ borderWidth: 0 }}>
              <Card.Image
                style={{ width: 60, height: 60 }}
                alt="Mino Logo"
                source={require("./assets/mino-logo.png")}
              />
            </Card>
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
            <Block
              img={require("./assets/food.jpg")}
              textToSpeak="I want food"
            />
            <Block
              img={require("./assets/sleep.jpg")}
              textToSpeak="I want to sleep"
            />
            <Block
              img={require("./assets/outside.jpg")}
              textToSpeak="I want to go outside"
            />
            <Block
              img={require("./assets/home.jpg")}
              textToSpeak="I want to go home"
            />
            {/* <Block img={outsideImg} textToSpeak="I want to listen to music" />
            <Block img={outsideImg} textToSpeak="I want to play on a phone" /> */}
          </ScrollView>
        </View>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};
