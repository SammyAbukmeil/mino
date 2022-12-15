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
        titleStyle={styles.menuTitle}
        onPress={() => {
          toggleOverlay();
          navigation.navigate("Home");
        }}
        style={styles.menuBtn}
        containerStyle={styles.btnContainer}
      />
      <Button
        title="Blocks"
        titleStyle={styles.menuTitle}
        onPress={() => {
          toggleOverlay();
          navigation.navigate("Blocks");
        }}
        style={styles.menuBtn}
        containerStyle={styles.btnContainer}
      />
      <Button
        title="About"
        titleStyle={styles.menuTitle}
        onPress={() => {
          toggleOverlay();
          navigation.navigate("About");
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
  menuTitle: {
    fontFamily: "WorkSans_700Bold",
  },
  btnContainer: {
    width: 200,
    marginHorizontal: 10,
    marginVertical: 12,
  },
});

export default Menu;
