import { Button, Overlay } from "@rneui/themed";
import { StyleSheet } from "react-native";

const Menu = ({ navigation, visible, toggleOverlay }) => {
  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={toggleOverlay}
      style={{ padding: 30, width: 300 }}
    >
      <Button
        title="Home"
        onPress={() => navigation.navigate("Home")}
        style={styles.menuBtn}
      />
      <Button
        title="About"
        onPress={() => {
          toggleOverlay();
          navigation.navigate("About");
        }}
        style={styles.menuBtn}
      />
      <Button
        title="Settings"
        onPress={() => {
          toggleOverlay();
          navigation.navigate("Settings");
        }}
        style={styles.menuBtn}
      />
    </Overlay>
  );
};

const styles = StyleSheet.create({
  menuBtn: {
    marginVertical: 12,
    marginHorizontal: 10,
    minWidth: 170,
    borderRadius: 20,
    borderBottomEndRadius: 20,
  },
});

export default Menu;
