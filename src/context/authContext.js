import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//signup action
const signup = (dispatch) => {
  return ({ email, Password }) => {
    //Make api request to sign up
    //After sign up, Modify state that we are authenticated
    //Sign up Failed: return error
  };
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
  {},
  { isSignedIn: false }
);
