import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, Divider, Input, Text } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";
import { useContext, useState } from "react";
import { Image, ScrollView, View } from "react-native";
import { BlockContext } from "../../../contexts/BlockContext";
import useOverlay from "../../../hooks/useOverlay";
import Header from "../../Header/Header";
import Menu from "../../Menu/Menu";

const BlocksScreen = ({ navigation }) => {
  const { getBlocks } = useContext(BlockContext);
  const [visible, toggleOverlay] = useOverlay();

  const [img, setImg] = useState(null);
  const [text, setText] = useState("");
  const [deleted, setDeleted] = useState(false);
  const [added, setAdded] = useState(false);
  const [errorText, setErrorText] = useState("");

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
    if (!text) {
      setErrorText("ENTER TEXT TO SPEAK");
      return;
    }

    setErrorText("");

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
      <ScrollView style={{ marginTop: 20 }}>
        <Text h2Style={{ textAlign: "center" }} h2>
          Blocks
        </Text>
        <View
          style={{
            marginTop: 10,
            marginBottom: 30,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 22, textAlign: "center", marginTop: 20 }}>
            Here you can add or delete blocks on the homepage.
          </Text>
          <Text
            style={{
              fontSize: 22,
              marginHorizontal: 30,
              marginVertical: 20,
              textAlign: "center",
            }}
          >
            Select an image, and some text, and click add. It will add that
            image with the text to speak on the homepage.
          </Text>
          <Button title="Select An Image" onPress={pickImage} />
          {img && (
            <>
              <Image
                source={{ uri: img }}
                style={{ width: 200, height: 200, marginTop: 25 }}
              />
              <Input
                placeholder="Text To Speak..."
                onChangeText={(value) => setText(value)}
                style={{ padding: 5 }}
                containerStyle={{ marginVertical: 25, paddingHorizontal: 40 }}
                errorStyle={{ color: "red" }}
                errorMessage={errorText}
              />
              <Button
                containerStyle={{ marginTop: 10 }}
                title="Add block"
                onPress={addBlock}
              />
              {added && (
                <Text
                  style={{ color: "green", fontWeight: "700", marginTop: 20 }}
                >
                  Sucessfully Added New Block
                </Text>
              )}
            </>
          )}
          <Divider
            style={{ width: "80%", marginVertical: 50 }}
            color="#2089dc"
            width={1}
            orientation="horizontal"
          />
          <Text
            style={{
              fontSize: 22,
              marginHorizontal: 30,
              textAlign: "center",
            }}
          >
            If you'd like to start again, you can delete all existing blocks.
          </Text>
          <Button
            containerStyle={{ marginTop: 25 }}
            title="Delete existing blocks"
            onPress={deleteBlocks}
          />
          {deleted && (
            <Text style={{ color: "green", fontWeight: "700", marginTop: 20 }}>
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
