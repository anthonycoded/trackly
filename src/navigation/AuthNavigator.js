import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";

const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Signup">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Signin"
        component={SigninScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Signup"
        component={SignupScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
