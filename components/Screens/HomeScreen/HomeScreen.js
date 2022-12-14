import { useContext, useEffect } from "react";
import { ScrollView } from "react-native";
import { BlockContext } from "../../../contexts/BlockContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import useOverlay from "../../../hooks/useOverlay";
import Block from "../../Block/Block";
import Header from "../../Header/Header";
import Menu from "../../Menu/Menu";

const HomeScreen = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const { blocks, getBlocks } = useContext(BlockContext);
  const [visible, toggleOverlay] = useOverlay();

  useEffect(() => {
    getBlocks();
  }, []);

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
        {/* <Button title="Get Data" onPress={getData} /> */}
        {blocks &&
          blocks.map((block, i) => (
            <Block key={i} img={{ uri: block.img }} textToSpeak={block.text} />
          ))}
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
