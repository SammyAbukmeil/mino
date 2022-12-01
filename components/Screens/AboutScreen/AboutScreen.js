import { Text } from "@rneui/themed";
import { Linking, ScrollView, TouchableHighlight } from "react-native";
import useOverlay from "../../../hooks/useOverlay";
import Header from "../../Header/Header";
import Menu from "../../Menu/Menu";

const AboutScreen = ({ navigation }) => {
  const [visible, toggleOverlay] = useOverlay();

  return (
    <>
      <Header toggleOverlay={toggleOverlay} />
      <ScrollView style={{ textAlign: "center", marginTop: 20 }}>
        <Text h2>About</Text>
        <Text style={{ padding: 20, lineHeight: 30, fontSize: 20 }}>
          Mino is an app designed to help autistic children communicate.
        </Text>
        <Text
          style={{
            paddingHorizontal: 20,
            paddingBottom: 20,
            lineHeight: 30,
            fontSize: 20,
          }}
        >
          The children can click on the images to get the app to speak the words
          for them.
        </Text>
        <Text
          style={{
            paddingHorizontal: 20,
            lineHeight: 30,
            fontSize: 20,
            paddingBottom: 20,
          }}
        >
          Currently we have a few predefined phrases, however, the app is still
          in development. I’ll be adding more common phrases soon, and the
          ability to upload your own.
        </Text>
        <Text style={{ paddingHorizontal: 20, lineHeight: 30, fontSize: 20 }}>
          To request a new feature, email
          <TouchableHighlight
            onPress={() =>
              Linking.openURL(
                "mailto:mino.requests@gmail.com?subject=Mino App - Feature Request&body="
              )
            }
          >
            <Text style={{ textDecorationLine: "underline", color: "blue" }}>
              mino.requests@gmail.com
            </Text>
          </TouchableHighlight>
        </Text>
      </ScrollView>
      <Menu
        navigation={navigation}
        visible={visible}
        toggleOverlay={toggleOverlay}
      />
    </>
  );
};

export default AboutScreen;