import { ScrollView } from "react-native";
import useOverlay from "../../../hooks/useOverlay";
import Block from "../../Block/Block";
import Header from "../../Header/Header";
import Menu from "../../Menu/Menu";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { useContext } from "react";

const HomeScreen = ({ navigation }) => {
  const [visible, toggleOverlay] = useOverlay();

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Header toggleOverlay={toggleOverlay} />
      <ScrollView
        backgroundColor={theme === "dark" ? "#393939" : "#fff"}
        style={{ marginBottom: 10 }}
      >
        {/* Todo: Scroll horizontal - multiple rows */}
        {/* Row 1 - Food, Pizza, Salad */}
        {/* Row 2 - Go Somewhere, Home, Outside, Garden */}
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
      {/* TODO: Menu at the bottom, favs + all */}
      {/* To fav, click a heart / star at the top right */}
      <Menu
        navigation={navigation}
        visible={visible}
        toggleOverlay={toggleOverlay}
      />
    </>
  );
};

export default HomeScreen;
