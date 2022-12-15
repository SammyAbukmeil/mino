import {
  Merriweather_400Regular,
  Merriweather_700Bold,
} from "@expo-google-fonts/merriweather";
import {
  WorkSans_400Regular,
  WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createTheme, ThemeProvider } from "@rneui/themed";
import { useFonts } from "expo-font";
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
// SplashScreen.preventAutoHideAsync();

export default () => {
  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    WorkSans_700Bold,
    Merriweather_400Regular,
    Merriweather_700Bold,
  });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  if (!fontsLoaded) {
    return <p>Loading Fonts...</p>;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <BlockProvider>
          <SafeAreaProvider>
            <NavigationContainer>
              {/* <Stack.Navigator> */}
              <Stack.Navigator initialRouteName="Blocks">
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
  }
};
