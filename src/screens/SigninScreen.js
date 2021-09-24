import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const SigninScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Sign in Screen</Text>
      <Button
        title="Sign-Up"
        onPress={() => navigation.navigate("Signup")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SigninScreen;
