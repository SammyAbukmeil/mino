import { Button, Card } from "@rneui/themed";
import * as Speech from "expo-speech";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";

const Block = ({ img, textToSpeak }) => (
  <TouchableWithoutFeedback onPress={() => Speech.speak(textToSpeak)}>
    <Card>
      <Card.Image
        style={{ width: "100%", height: 300, borderRadius: 10 }}
        source={img}
      />
      <Card.Title style={{ fontSize: 20, paddingTop: 25, paddingBottom: 10 }}>
        {textToSpeak}
      </Card.Title>
      <Button
        // icon={
        //   <Icon
        //     name="surround-sound"
        //     color="#ffffff"
        //     type="AntDesign"
        //     iconStyle={{ marginRight: 10 }}
        //   />
        // }
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="Speak"
        onPress={() => Speech.speak(textToSpeak)}
      />
    </Card>
  </TouchableWithoutFeedback>
);
export default Block;
