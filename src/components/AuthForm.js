import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";

const AuthForm = ({ headerText, error, onSubmit, buttonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text h3 style={{ marginBottom: 20 }}>
        {headerText}
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

      {error ? (
        <Text style={{ color: "red", marginBottom: 5 }}>{error}</Text>
      ) : null}
      <Button
        title={buttonText}
        onPress={() => onSubmit({ email, password })}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "center",
  },
  inputContainer: {
    marginVertical: 10,
  },
});

export default AuthForm;
