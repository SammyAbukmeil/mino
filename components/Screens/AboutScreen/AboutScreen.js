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
          Mino is an app designed to help give non verbal children a voice.
        </Text>
        <Text
          style={{
            paddingHorizontal: 20,
            paddingBottom: 20,
            lineHeight: 30,
            fontSize: 20,
          }}
        >
          Your child can communicate by clicking on the images and hearing the
          app speak.
        </Text>
        <Text
          style={{
            paddingHorizontal: 20,
            lineHeight: 30,
            fontSize: 20,
            paddingBottom: 20,
          }}
        >
          Currently the app is still in development and only has a few
          predefined phrases. We'll be adding more common phrases soon and
          incorporating the ability to add your own phrases.
        </Text>
        <Text
          style={{
            paddingHorizontal: 20,
            lineHeight: 30,
            fontSize: 20,
            paddingBottom: 20,
          }}
        >
          We hope you find this app useful.
        </Text>
        <Text style={{ paddingHorizontal: 20, lineHeight: 30, fontSize: 20 }}>
          To provide feedback or request a new feature, please email
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
