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
        onPress={() => {
          toggleOverlay();
          navigation.navigate("Home");
        }}
        style={styles.menuBtn}
        containerStyle={styles.btnContainer}
      />
      <Button
        title="Blocks"
        onPress={() => {
          toggleOverlay();
          navigation.navigate("Blocks");
        }}
        style={styles.menuBtn}
        containerStyle={styles.btnContainer}
      />
      <Button
        title="About"
        onPress={() => {
          toggleOverlay();
          navigation.navigate("About");
        }}
        style={styles.menuBtn}
        containerStyle={styles.btnContainer}
      />
      <Button
        title="Settings"
        onPress={() => {
          toggleOverlay();
          navigation.navigate("Settings");
        }}
        style={styles.menuBtn}
        containerStyle={styles.btnContainer}
      />
    </Overlay>
  );
};

const styles = StyleSheet.create({
  menuBtn: {
    borderRadius: 20,
    borderBottomEndRadius: 20,
  },
  btnContainer: {
    width: 200,
    marginHorizontal: 10,
    marginVertical: 12,
  },
});

export default Menu;
