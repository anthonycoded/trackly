import { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/authContext";

const LoadingScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);
  useEffect(() => {
    tryLocalSignin();
  }, []);
  return null;
};

export default LoadingScreen;
