import { Switch, Text } from "@rneui/themed";
import { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { ThemeContext } from "../../../contexts/ThemeContext";
import useOverlay from "../../../hooks/useOverlay";
import Header from "../../Header/Header";
import Menu from "../../Menu/Menu";

const SettingsScreen = ({ navigation }) => {
  const [visible, toggleOverlay] = useOverlay();
  const [checked, setChecked] = useState(false);

  const { toggleTheme, theme } = useContext(ThemeContext);

  const toggleSwitch = () => {
    setChecked(!checked);
    toggleTheme();
  };

  useEffect(() => {
    if (theme === "dark") {
      setChecked(true);
    }
  }, []);

  return (
    <>
      <Header toggleOverlay={toggleOverlay} />
      <ScrollView
        backgroundColor={theme === "dark" ? "#393939" : "#fff"}
        style={{ marginTop: 20 }}
      >
        <Text h2Style={{ textAlign: "center" }} h2>
          Settings
        </Text>
        <Text style={{ textAlign: "center", marginTop: 20, fontSize: 20 }}>
          Dark Theme
        </Text>
        <Switch
          style={{ margin: "auto", marginTop: 5 }}
          value={checked}
          onValueChange={toggleSwitch}
        />
        {/* <Text
          style={{
            paddingHorizontal: 20,
            paddingBottom: 20,
            fontSize: 20,
          }}
        >
          Two Blocks Per Row?
        </Text> */}
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
