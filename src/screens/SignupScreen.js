import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { Context as AuthContext } from "../context/authContext";

const SignupScreen = () => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(state);
  return (
    <View style={styles.container}>
      <Text h3 style={{ marginBottom: 20 }}>
        Sign up for Tracker
      </Text>
      <View style={styles.inputContainer}>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
      </View>
      {state.error ? <Text>{state.error}</Text> : null}
      <Button
        title="Sign-up"
        onPress={() => signup({ email, password })}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    marginBottom: 200,
  },
  inputContainer: {
    marginVertical: 10,
  },
});

export default SignupScreen;
