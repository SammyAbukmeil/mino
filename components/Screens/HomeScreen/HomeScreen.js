import { Header } from "@rneui/themed";
import { Button, Image, ScrollView } from "react-native";
import Block from "../../../components/Block/Block";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <Header
        barStyle="default"
        leftComponent={
          <Image
            source={require("../../../assets/mino-logo.png")}
            style={{ width: 50, height: 50 }}
          />
        }
        placement="center"
        rightComponent={{ icon: "menu", color: "#fff" }}
        rightContainerStyle={{ margin: 15 }}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
      <ScrollView style={{ marginBottom: 10 }}>
        <Block
          img={require("../../../assets/food.jpg")}
          textToSpeak="I want food"
        />
        <Block
          img={require("../../../assets/sleep.jpg")}
          textToSpeak="I want to sleep"
        />
        <Block
          img={require("../../../assets/outside.jpg")}
          textToSpeak="I want to go outside"
        />
        <Block
          img={require("../../../assets/home.jpg")}
          textToSpeak="I want to go home"
        />
        {/* <Block img={outsideImg} textToSpeak="I want to listen to music" />
        <Block img={outsideImg} textToSpeak="I want to play on a phone" /> */}
      </ScrollView>
    </>
  );
};

export default HomeScreen;
