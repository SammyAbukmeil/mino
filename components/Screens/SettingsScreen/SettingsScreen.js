import { Button, Header, Icon, Overlay } from "@rneui/themed";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet } from "react-native";

const SettingsScreen = ({ navigation }) => {
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
        <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
      </ScrollView>
      {/* TODO: Move to component */}
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        style={{ padding: 30, width: 300 }}
      >
        <Button
          title="About"
          onPress={() => navigation.navigate("Settings")}
          style={styles.menuBtn}
        />
        <Button
          title="Settings"
          onPress={() => navigation.navigate("Settings")}
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

export default SettingsScreen;
