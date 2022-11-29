import { Header } from "@rneui/themed";
import { Button, Image, ScrollView } from "react-native";

const SettingsScreen = ({ navigation }) => {
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
        rightComponent={{ icon: "menu", color: "#fff" }}
        rightContainerStyle={{ margin: 15 }}
      />

      <ScrollView style={{ marginBottom: 10 }}>
        <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
      </ScrollView>
    </>
  );
};

export default SettingsScreen;
