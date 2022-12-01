import { Header, Icon, Text } from "@rneui/themed";
import { Image, ScrollView } from "react-native";
import useOverlay from "../../../hooks/useOverlay";
import Menu from "../../Menu/Menu";

const SettingsScreen = ({ navigation }) => {
  const [visible, toggleOverlay] = useOverlay();

  return (
    <>
      <Header
        barStyle="default"
        leftComponent={
          <Image
            source={require("../../../assets/mino-logo.png")}
            style={{ width: 50, height: 50 }}
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

      <ScrollView style={{ marginBottom: 10 }}>
        <Text>Settings</Text>
      </ScrollView>
      <Menu
        navigation={navigation}
        visible={visible}
        toggleOverlay={toggleOverlay}
      />
    </>
  );
};

export default SettingsScreen;
