import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabNavigator from "./src/navigation/BottomTabNavigator";

import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer screenOptions={{}}>
      <Stack.Navigator
        initialRouteName="Search"
        screenOptions={{
          headerTitle: "Food Spot Search",
        }}
      >
        <Stack.Screen
          name="BottomTab"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
