import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Login from "./Login";
import Signup from "./Signup";

const AuthGate = ({ children }) => {
  const { user } = useAuth();
  const [mode, setMode] = useState("login"); // "login" | "signup"

  if (user) return children;

  return mode === "login" ? (
    <Login onSwitch={() => setMode("signup")} />
  ) : (
    <Signup onSwitch={() => setMode("login")} />
  );
};

export default AuthGate;