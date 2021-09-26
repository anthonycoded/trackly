import AsyncStorage from "@react-native-async-storage/async-storage";
import * as navigationRef from "../navigationRef";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  ///Modify State
  switch (action.type) {
    case "add_error":
      return { ...state, error: action.payload };
    case "signin":
      return { error: "", token: action.payload };

    case "clear_error":
      return { ...state, error: "" };
    case "signout":
      return { token: null, error: "" };
    default:
      return state;
  }
};

//Clear error message
const clearError = (dispatch) => () => {
  dispatch({ type: "clear_error" });
};

//Try local sign in
const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");

  if (token) {
    dispatch({ type: "signin", payload: token });
    navigationRef.navigate("MainFlow");
  } else {
    navigationRef.navigate("AuthFlow");
  }
};

//signup action
const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      //Make api request to sign up
      const response = await trackerApi.post("/auth/signup", {
        email,
        password,
      });

      //After sign up, Modify state with token
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });

      //Navigate to Main Flow
      navigationRef.navigate("MainFlow");

      //Dispatch error Action
    } catch (error) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };

//signin action
const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      //Make api request to sign in
      const response = await trackerApi.post("/auth/signin", {
        email,
        password,
      });

      //After sign up, Modify state with token
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });

      //Navigate to Main Flow
      navigationRef.navigate("MainFlow");
    } catch (error) {
      console.log(error);
      //Sign in Failed: return error
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in. Try again",
      });
    }
  };

//signout action
const signout = (dispatch) => async () => {
  //Remove local Token
  await AsyncStorage.removeItem("token");

  //Modify state token = null
  dispatch({ type: "signout" });

  //Navigate to AuthFLow
  navigationRef.navigate("AuthFlow");
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearError, tryLocalSignin },
  { token: null, error: "" }
);
