import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Sign up Screen</Text>
      <Button
        title="Sign-In"
        onPress={() => navigation.navigate("Signin")}
      ></Button>
      <Button
        title="Home"
        onPress={() => navigation.navigate("BottomTab")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
