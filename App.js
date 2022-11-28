import { NavigationContainer } from "@react-navigation/native";
import { Box, Flex, NativeBaseProvider, ScrollView } from "native-base";
import React from "react";
import { Image, Platform, StatusBar, View } from "react-native";
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
            <Image
              source={require("./assets/mino-logo.png")}
              style={{ width: 60, height: 60, margin: 20 }}
            />
            <Box w="25%" m="10" alignItems="flex-end">
              <Icon
                color="#fff"
                name="menu"
                onPress={() => props.navigation.toggleDrawer()}
              />
              {/* <Menu
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
              </Menu> */}
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
