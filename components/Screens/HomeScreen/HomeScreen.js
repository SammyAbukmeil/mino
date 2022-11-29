import { Button, Header, Icon, Overlay } from "@rneui/themed";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";
import Block from "../../../components/Block/Block";

const HomeScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

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
        rightComponent={
          <Icon
            name="menu"
            color="#ffffff"
            type="feather"
            onPress={toggleOverlay}
            buttonStyle={styles.button}
          />
        }
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
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Icon
          name="x"
          type="feather"
          color="black"
          size={25}
          iconStyle={{ marginRight: 10 }}
          onPress={toggleOverlay}
          style={styles.cross}
        />
        <Text style={styles.textPrimary}>Hello!</Text>
        <Text style={styles.textSecondary}>
          Welcome to React Native Elements
        </Text>
      </Overlay>
    </>
  );
};

const styles = StyleSheet.create({
  cross: {
    textAlign: "right",
  },
  textPrimary: {
    marginVertical: 20,
    textAlign: "center",
    fontSize: 20,
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: 17,
  },
});

export default HomeScreen;
