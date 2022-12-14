import { Button, Card, Icon } from "@rneui/themed";
import * as Speech from "expo-speech";
import { TouchableWithoutFeedback } from "react-native";

const Block = ({ img, textToSpeak }) => (
  <TouchableWithoutFeedback onPress={() => Speech.speak(textToSpeak)}>
    <Card
      containerStyle={{
        marginBottom: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#2089dc",
      }}
    >
      <Card.Image
        style={{ width: "100%", height: 250, borderRadius: 10 }}
        source={img}
      />
      <Card.Title
        style={{
          fontSize: 25,
          paddingTop: 25,
          paddingBottom: 10,
          fontFamily: "WorkSans_400Regular",
        }}
      >
        {textToSpeak}
      </Card.Title>
      <Button
        icon={
          <Icon
            name="volume-2"
            color="#ffffff"
            type="feather"
            iconStyle={{ marginRight: 10 }}
          />
        }
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="Speak"
        titleStyle={{ fontFamily: "WorkSans_700Bold" }}
        onPress={() => Speech.speak(textToSpeak)}
      />
    </Card>
  </TouchableWithoutFeedback>
);

export default Block;
