import { createContext, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [Auth, setAuth] = useState(false);
  const [token, settoken] = useState("");

  return (
    <AuthContext.Provider value={{ Auth, setAuth, token, settoken }}>
      {children}
    </AuthContext.Provider>
  );
};
