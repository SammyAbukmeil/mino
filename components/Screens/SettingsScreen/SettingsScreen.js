import { Switch, Text } from "@rneui/themed";
import { useState } from "react";
import { ScrollView } from "react-native";
import Header from "../../Header/Header";

import useOverlay from "../../../hooks/useOverlay";
import Menu from "../../Menu/Menu";

const SettingsScreen = ({ navigation }) => {
  const [visible, toggleOverlay] = useOverlay();
  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => {
    setChecked(!checked);
  };

  return (
    <>
      <Header toggleOverlay={toggleOverlay} />
      <ScrollView style={{ textAlign: "center", marginTop: 20 }}>
        <Text h2>Settings</Text>
        <Text style={{ marginTop: 20, fontSize: 20 }}>Dark Theme</Text>
        <Switch
          style={{ margin: "auto", marginTop: 5 }}
          value={checked}
          onValueChange={(value) => setChecked(value)}
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
