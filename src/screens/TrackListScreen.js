import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text>AccountScreen</Text>
      <Button
        title="Track Details"
        onPress={() => navigation.navigate("Details")}
      ></Button>
    </View>
  );
};
const styles = StyleSheet.create({});

export default TrackListScreen;
