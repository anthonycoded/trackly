import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthNavigator from "./src/navigation/AuthNavigator";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";

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
          name="Auth"
          component={AuthNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
