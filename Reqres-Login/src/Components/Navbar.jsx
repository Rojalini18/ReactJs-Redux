import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";

const Navbar = () => {
  const { Auth } = useContext(AuthContext);
  return (
    <div>
      <h3>Status: {Auth ? "LogedIn" : "LogedOut"}</h3>
    </div>
  );
};

export default Navbar;
