import AsyncStorage from "@react-native-async-storage/async-storage";
import { Switch, Text } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";
import { useContext, useEffect, useState } from "react";
import { Button, Image, ScrollView, View } from "react-native";
import { ThemeContext } from "../../../contexts/ThemeContext";
import useOverlay from "../../../hooks/useOverlay";
import Header from "../../Header/Header";
import Menu from "../../Menu/Menu";

const SettingsScreen = ({ navigation }) => {
  const [visible, toggleOverlay] = useOverlay();
  const [checked, setChecked] = useState(false);
  const [image, setImage] = useState(null);

  const { toggleTheme, theme } = useContext(ThemeContext);

  const toggleSwitch = () => {
    setChecked(!checked);
    toggleTheme();
  };

  useEffect(() => {
    if (theme === "dark") {
      setChecked(true);
    }
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);

      try {
        const previousUserBlocks = await AsyncStorage.getItem("@storage_Key");

        if (previousUserBlocks) {
          console.log("FOUND");
          const parsedBlocks = JSON.parse(previousUserBlocks);

          console.log(parsedBlocks);

          await AsyncStorage.setItem(
            "@storage_Key",
            JSON.stringify([
              ...parsedBlocks,
              {
                text: "I want to go for a run",
                img: result.assets[0].uri,
              },
            ])
          );
        } else {
          console.log("NOT FOUND");
          await AsyncStorage.setItem(
            "@storage_Key",
            JSON.stringify([
              {
                text: "I want to go for a run",
                img: result.assets[0].uri,
              },
            ])
          );
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const deleteBlocks = async () => {
    try {
      await AsyncStorage.removeItem("@storage_Key");
      navigation.goBack();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Header toggleOverlay={toggleOverlay} />
      <ScrollView
        backgroundColor={theme === "dark" ? "#393939" : "#fff"}
        style={{ marginTop: 20 }}
      >
        <Text h2Style={{ textAlign: "center" }} h2>
          Settings
        </Text>
        <Text style={{ textAlign: "center", marginTop: 20, fontSize: 20 }}>
          Dark Theme
        </Text>
        <Switch
          style={{ margin: "auto", marginTop: 5 }}
          value={checked}
          onValueChange={toggleSwitch}
        />
        {/* 
          Nicer Dark Theme:
          https://react-native-async-storage.github.io/async-storage/docs/install
        */}
        <View
          style={{
            marginTop: 10,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
          <Button title="Delete existing blocks" onPress={deleteBlocks} />
        </View>
      </ScrollView>
      <Menu
        navigation={navigation}
        visible={visible}
        toggleOverlay={toggleOverlay}
      />
    </>
  );
};

export default SettingsScreen;
