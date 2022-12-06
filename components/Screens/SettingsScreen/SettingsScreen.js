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
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </View>
        {/* 
          TODO: BASIC STORAGE 
          https://react-native-async-storage.github.io/async-storage/docs/usage
        */}
        {/* 
          TODO: IMAGE STORAGE 
          https://docs.expo.dev/versions/latest/sdk/filesystem/
          https://stackoverflow.com/questions/62763209/how-do-i-save-an-image-from-expo-image-picker-to-expo-file-system-and-then-rende
        */}
        {/* 
          TODO: Resize
          https://docs.expo.dev/versions/v47.0.0/sdk/imagemanipulator/ 
        */}
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
