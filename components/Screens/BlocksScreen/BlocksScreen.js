import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, Input, Text } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";
import { useContext, useState } from "react";
import { Image, ScrollView, View } from "react-native";
import { BlockContext } from "../../../contexts/BlockContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import useOverlay from "../../../hooks/useOverlay";
import Header from "../../Header/Header";
import Menu from "../../Menu/Menu";

const BlocksScreen = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const { getBlocks } = useContext(BlockContext);
  const [visible, toggleOverlay] = useOverlay();

  const [img, setImg] = useState(null);
  const [text, setText] = useState("");
  const [deleted, setDeleted] = useState(false);
  const [added, setAdded] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImg(result.assets[0].uri);
    }
  };

  const deleteBlocks = async () => {
    try {
      await AsyncStorage.removeItem("@blocks");
      setDeleted(true);
      getBlocks();
    } catch (e) {
      console.log(e);
    }
  };

  const setBlock = async (data) => {
    await AsyncStorage.setItem("@blocks", JSON.stringify(data));
  };

  const addBlock = async () => {
    try {
      const previousUserBlocks = await AsyncStorage.getItem("@blocks");

      if (previousUserBlocks) {
        const parsedBlocks = JSON.parse(previousUserBlocks);
        setBlock([
          ...parsedBlocks,
          {
            text,
            img,
          },
        ]);
      } else {
        setBlock([
          {
            text,
            img,
          },
        ]);
      }

      setAdded(true);
      getBlocks();
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
          Blocks
        </Text>
        <View
          style={{
            marginTop: 10,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          {img && (
            <>
              <Image
                source={{ uri: img }}
                style={{ width: 200, height: 200, marginTop: 10 }}
              />
              <Input
                placeholder="Text To Speak..."
                onChangeText={(value) => setText(value)}
              />
              <Button
                containerStyle={{ marginTop: 10 }}
                title="Add block"
                onPress={addBlock}
              />
              {added && (
                <Text style={{ color: "green", fontWeight: "700" }}>
                  Sucessfully Added New Block
                </Text>
              )}
            </>
          )}
          <Button
            containerStyle={{ marginTop: 10 }}
            title="Delete existing blocks"
            onPress={deleteBlocks}
          />
          {deleted && (
            <Text style={{ color: "green", fontWeight: "700" }}>
              Sucessfully Deleted All Blocks
            </Text>
          )}
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

export default BlocksScreen;
