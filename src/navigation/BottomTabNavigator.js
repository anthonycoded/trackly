import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TrackDetailScreen from "../screens/TrackDetailScreen";
import TrackCreateScreen from "../screens/TrackCreateScreen";
import TrackListScreen from "../screens/TrackListScreen";
import AccountScreen from "../screens/AccountScreen";

const Stack = createNativeStackNavigator();

function TrackNavigator() {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen name="Details" component={TrackDetailScreen} />

      <Stack.Screen name="List" component={TrackListScreen} />
    </Stack.Navigator>
  );
}

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName="Tracks">
      <Tab.Screen
        name="Tracks"
        component={TrackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Create" component={TrackCreateScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
