import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Context as AuthContext } from "../context/authContext";

import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";

const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  const { clearError } = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="Signup">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Signin"
        component={SigninScreen}
        listeners={{ blur: () => clearError() }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Signup"
        component={SignupScreen}
        listeners={{ blur: () => clearError() }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
