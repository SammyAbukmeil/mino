import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AboutScreen from "./components/Screens/AboutScreen/AboutScreen";
import BlocksScreen from "./components/Screens/BlocksScreen/BlocksScreen";
import HomeScreen from "./components/Screens/HomeScreen/HomeScreen";
import SettingsScreen from "./components/Screens/SettingsScreen/SettingsScreen";
import { BlockProvider } from "./contexts/BlockContext";
import { ThemeProvider } from "./contexts/ThemeContext";

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <BlockProvider>
      <ThemeProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator>
              {/* TODO: REMOVE BEFORE COMMITING */}
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
              <Stack.Screen
                options={{ headerShown: false }}
                name="Settings"
                component={SettingsScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </BlockProvider>
  );
};
