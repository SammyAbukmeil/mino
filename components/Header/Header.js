import { Header as Head, Icon } from "@rneui/themed";
import { Image } from "react-native";

const Header = ({ toggleOverlay }) => {
  return (
    <Head
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
