import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider as AuthProvider } from "./src/context/authContext";
import AuthNavigator from "./src/navigation/AuthNavigator";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import { navigationRef } from "./src/navigationRef";
import LoadingScreen from "./src/screens/LoadingScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <AuthProvider>
      <NavigationContainer screenOptions={{}} ref={navigationRef}>
        <Stack.Navigator initialRouteName="Loading">
          <Stack.Screen
            name="Loading"
            component={LoadingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Auth"
            component={AuthNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainFlow"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
