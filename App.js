import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import StartPage from "./src/screens/StartPage";
import SelectLevel from "./src/screens/SelectLevel";
import Login from "./src/screens/Auth/Login";
import Register from "./src/screens/Auth/Register";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="StartPage" component={StartPage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SelectLevel" component={SelectLevel} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
