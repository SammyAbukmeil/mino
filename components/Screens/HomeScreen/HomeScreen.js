import { ScrollView } from "react-native";
import useOverlay from "../../../hooks/useOverlay";
import Block from "../../Block/Block";
import Header from "../../Header/Header";
import Menu from "../../Menu/Menu";

const HomeScreen = ({ navigation }) => {
  const [visible, toggleOverlay] = useOverlay();

  return (
    <>
      <Header toggleOverlay={toggleOverlay} />
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
      <Menu
        navigation={navigation}
        visible={visible}
        toggleOverlay={toggleOverlay}
      />
    </>
  );
};

export default HomeScreen;
