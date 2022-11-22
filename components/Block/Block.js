import * as Speech from "expo-speech";
import { AspectRatio, Box, Heading, Image, Stack } from "native-base";
import React from "react";

import { TouchableWithoutFeedback } from "react-native";

const Block = ({ img, textToSpeak }) => {
  const speak = () => {
    Speech.speak(textToSpeak);
  };

  return (
    <TouchableWithoutFeedback onPress={speak}>
      <Box justifyContent="center" mt="20">
        <Box
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
        >
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
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
              <Heading size="md" textAlign="center">
                {textToSpeak}
              </Heading>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default Block;
