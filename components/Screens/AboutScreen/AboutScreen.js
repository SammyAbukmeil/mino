import { Text } from "@rneui/themed";
import {
  Linking,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import useOverlay from "../../../hooks/useOverlay";
import Header from "../../Header/Header";
import Menu from "../../Menu/Menu";

const AboutScreen = ({ navigation }) => {
  const [visible, toggleOverlay] = useOverlay();

  return (
    <>
      <Header toggleOverlay={toggleOverlay} />
      <ScrollView style={{ marginTop: 20 }}>
        <Text h2Style={styles.text} h2>
          About
        </Text>
        <Text
          style={{
            textAlign: "center",
            padding: 20,
            lineHeight: 30,
            fontSize: 20,
          }}
        >
          Mino is an app designed to help give non verbal children a voice.
        </Text>
        <Text
          style={{
            paddingHorizontal: 20,
            paddingBottom: 20,
            lineHeight: 30,
            fontSize: 20,
            textAlign: "center",
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
            textAlign: "center",
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
            textAlign: "center",
          }}
        >
          We hope you find this app useful.
        </Text>
        <Text
          style={{
            textAlign: "center",
            paddingHorizontal: 20,
            lineHeight: 30,
            fontSize: 20,
          }}
        >
          To provide feedback or request a new feature, please email:
        </Text>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() =>
            Linking.openURL(
              "mailto:mino.requests@gmail.com?subject=Mino App - Feature Request&body="
            )
          }
        >
          <Text
            style={{
              textAlign: "center",
              textDecorationLine: "underline",
              color: "blue",
              fontSize: 20,
            }}
          >
            mino.requests@gmail.com
          </Text>
        </TouchableHighlight>
      </ScrollView>
      <Menu
        navigation={navigation}
        visible={visible}
        toggleOverlay={toggleOverlay}
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});

export default AboutScreen;
