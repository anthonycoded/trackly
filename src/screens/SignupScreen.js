import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import AuthButtons from "../components/AuthButtons";
import { Context as AuthContext } from "../context/authContext";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  console.log(state);
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Trackly"
        buttonText="Sign-up"
        onSubmit={signup}
        error={state.error}
      ></AuthForm>
      <AuthButtons
        text="Already have an account? Sign in instead."
        routeName="Signin"
      ></AuthButtons>
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
});

export default SignupScreen;
