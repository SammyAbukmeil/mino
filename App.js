import * as Speech from "expo-speech";
import {
  AspectRatio,
  Box,
  Button,
  extendTheme,
  Flex,
  Heading,
  Image,
  NativeBaseProvider,
  Stack,
} from "native-base";
import React from "react";

const theme = extendTheme({});

console.log(theme);

// const foodImg = require("./assets/food.jpg");
const foodImg =
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80";
// const sleepImg = require("./assets/sleep.jpg");
const sleepImg =
  "https://images.unsplash.com/photo-1539438050859-39219d86bde8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

const Block = ({ img, textToSpeak }) => {
  const speak = () => {
    Speech.speak(textToSpeak);
  };

  return (
    <Box>
      <Box
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
      >
        <Box>
          {/* <AspectRatio w="100%" h="50%" ratio={16 / 15}> */}
          <AspectRatio w="50%" ratio={16 / 9}>
            <Image
              source={{
                uri: img,
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {textToSpeak}
            </Heading>
          </Stack>
        </Stack>
        <Button title="Press to hear some words" onPress={speak}>
          Test
        </Button>
      </Box>
    </Box>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Flex direction="row" mb="2.5" mt="1.5">
        <Block img={foodImg} textToSpeak="I want food" />
        <Block img={sleepImg} textToSpeak="I want to sleep" />
      </Flex>
      <Flex direction="row" mb="2.5" mt="1.5">
        {/* <Example /> */}
        {/* <Example /> */}
      </Flex>
    </NativeBaseProvider>
  );
};
