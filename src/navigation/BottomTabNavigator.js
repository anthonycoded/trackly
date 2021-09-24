import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import AccountScreen from "../screens/AccountScreen";

const Stack = createNativeStackNavigator();

function TrackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Details" component={TrackDetailScreen} />

      <Stack.Screen name="List" component={TrackListScreen} />
    </Stack.Navigator>
  );
}

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen component={TrackNavigator} />
      <Stack.Screen name="Create" component={TrackCreateScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
