import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, error: action.payload };
    case "signup":
      return { error: "", token: action.payload };
    default:
      return state;
  }
};

//signup action
const signup =
  (dispatch) =>
  async ({ email, password }) => {
    //Make api request to sign up
    try {
      const response = await trackerApi.post("/auth/signup", {
        email,
        password,
      });

      //After sign up, Modify state that we are authenticated
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signup", payload: response.data.token });

      //Dispatch error Action
    } catch (error) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };

//signin action
const signin = (dispatch) => {
  return ({ email, Password }) => {
    //Make api request to sign in
    //Sign in Success: Modify state that we are authenticated
    //Sign in Failed: return error
  };
};

//signout action
const signout = (dispatch) => {
  return ({ email, Password }) => {
    //Make api request to sign out
    //Modify state that we are authenticated
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, error: "" }
);
