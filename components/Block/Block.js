import * as Speech from "expo-speech";
import { AspectRatio, Box, Heading, Image } from "native-base";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";

const Block = ({ img, textToSpeak }) => (
  <TouchableWithoutFeedback onPress={() => Speech.speak(textToSpeak)}>
    <Box rounded="lg" borderColor="coolGray.200" borderWidth="1" mt="20">
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri: img,
            }}
            alt="image"
          />
        </AspectRatio>
        <Heading size="md" textAlign="center" p="4">
          {textToSpeak}
        </Heading>
      </Box>
    </Box>
  </TouchableWithoutFeedback>
);
export default Block;
