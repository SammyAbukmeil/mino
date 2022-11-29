import { NavigationContainer } from "@react-navigation/native";
import { Header } from "@rneui/themed";
import { Image, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Block from "./components/Block/Block";

const HomeScreen = () => {};

export default () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Header
          backgroundImageStyle={{}}
          barStyle="default"
          leftComponent={
            <Image
              source={require("./assets/mino-logo.png")}
              style={{ width: 50, height: 50 }}
            />
          }
          leftContainerStyle={{}}
          linearGradientProps={{}}
          placement="center"
          rightComponent={{ icon: "menu", color: "#fff" }}
          rightContainerStyle={{ margin: 15 }}
          statusBarProps={{}}
        />
        <ScrollView>
          <Block img={require("./assets/food.jpg")} textToSpeak="I want food" />
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
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
