import { Button, Header, Icon, Overlay } from "@rneui/themed";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import Block from "../../../components/Block/Block";

const HomeScreen = ({ navigation }) => {
  // TODO: Move to custom hook
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
          />
        }
        rightContainerStyle={{ margin: 15 }}
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
      {/* TODO: Move to component */}
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        style={{ padding: 30, width: 300 }}
      >
        <Button
          title="About"
          onPress={() => {
            toggleOverlay();
            navigation.navigate("Settings", { toggleOverlay, visible });
          }}
          style={styles.menuBtn}
        />
        <Button
          title="Settings"
          onPress={() => {
            toggleOverlay();
            navigation.navigate("Settings", { toggleOverlay, visible });
          }}
          style={styles.menuBtn}
        />
      </Overlay>
    </>
  );
};

const styles = StyleSheet.create({
  menuBtn: {
    marginVertical: 12,
    marginHorizontal: 10,
    minWidth: 170,
  },
});

export default HomeScreen;
