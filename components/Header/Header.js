import { Header as Head, Icon } from "@rneui/themed";
import { useContext } from "react";
import { Image } from "react-native";
import { ThemeContext } from "../../contexts/ThemeContext";

const Header = ({ toggleOverlay }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Head
      backgroundColor={theme === "dark" ? "#393939" : "#2089dc"}
      barStyle="default"
      leftComponent={
        <Image
          source={require("../../assets/mino-logo.png")}
          style={{ width: 50, height: 50, marginTop: 5 }}
        />
      }
      placement="center"
      rightComponent={
        <Icon
          name="menu"
          color="#ffffff"
          type="feather"
          onPress={toggleOverlay}
        />
      }
      rightContainerStyle={{ margin: 15 }}
    />
  );
};

export default Header;
