import { useContext } from "react";
import { AuthContext } from "../Context/ContextProvider";

const useAuth = () => {
  // use context to get the auth state
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
