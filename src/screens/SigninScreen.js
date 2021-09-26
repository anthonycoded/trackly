import React, { useContext } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Context as AuthContext } from "../context/authContext";

import AuthForm from "../components/AuthForm";
import AuthButtons from "../components/AuthButtons";

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In to Your Account"
        buttonText="Sign-in"
        onSubmit={signin}
        error={state.error}
      ></AuthForm>
      <AuthButtons
        text="Don't have an account?  Sign up instead."
        routeName="Signup"
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

export default SigninScreen;
