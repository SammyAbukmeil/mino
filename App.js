import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createTheme, ThemeProvider } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AboutScreen from "./components/Screens/AboutScreen/AboutScreen";
import BlocksScreen from "./components/Screens/BlocksScreen/BlocksScreen";
import HomeScreen from "./components/Screens/HomeScreen/HomeScreen";
import { BlockProvider } from "./contexts/BlockContext";

const theme = createTheme({
  lightColors: {
    primary: "#0077B6",
  },
  components: {
    Card: {
      containerStyle: {
        backgroundColor: "#48CAE4",
      },
    },
  },
});

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <BlockProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator>
              {/* <Stack.Navigator initialRouteName="Blocks"> */}
              <Stack.Screen
                options={{ headerShown: false }}
                name="Home"
                component={HomeScreen}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="About"
                component={AboutScreen}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="Blocks"
                component={BlocksScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </BlockProvider>
    </ThemeProvider>
  );
};
