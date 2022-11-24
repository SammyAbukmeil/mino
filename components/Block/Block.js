import * as Speech from "expo-speech";
import { Box, Heading } from "native-base";
import { Image } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";

const Block = ({ img, textToSpeak }) => (
  <TouchableWithoutFeedback onPress={() => Speech.speak(textToSpeak)}>
    <Box
      m="5"
      rounded="xl"
      borderColor="coolGray.200"
      borderWidth="1"
      mt="3"
      mb="5"
    >
      <Box>
        <Image
          source={img}
          alt="Speak block"
          style={{ width: "100%", height: 300, borderRadius: 10 }}
        />
        <Heading size="md" textAlign="center" p="4" backgroundColor="#f9f9f9">
          {textToSpeak}
        </Heading>
      </Box>
    </Box>
  </TouchableWithoutFeedback>
);
export default Block;
