import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Login from "./Login";
import Signup from "./Signup";
import "./Auth.css";
import logo from "../../assets/footer/logo.png";

const AuthGate = ({ children }) => {
  const { user } = useAuth();
  const [mode, setMode] = useState("login");

  if (user) return children;

  return (
    <div className="auth">
      <div className="auth__panel">
        <div className="auth__brand-side">
          <div className="auth__brand-deco" aria-hidden="true"></div>
          <img className="auth__brand-logo" src={logo} alt="TasteNest" />
          <h2 className="auth__brand-heading">
            {mode === "login" ? "Welcome Back" : "Join TasteNest"}
          </h2>
          <p className="auth__brand-text">
            {mode === "login"
              ? "Log in to continue ordering your favorite meals, fast."
              : "Create an account to start ordering delicious food today."}
          </p>
        </div>

        <div className="auth__form-side">
          <div className="auth__tabs">
            <button
              type="button"
              className={`auth__tab ${mode === "login" ? "auth__tab--active" : ""}`}
              onClick={() => setMode("login")}
            >
              Log In
            </button>
            <button
              type="button"
              className={`auth__tab ${mode === "signup" ? "auth__tab--active" : ""}`}
              onClick={() => setMode("signup")}
            >
              Sign Up
            </button>
            <span
              className="auth__tab-indicator"
              style={{ transform: mode === "login" ? "translateX(0%)" : "translateX(100%)" }}
            />
          </div>

          <div className="auth__form-wrap" key={mode}>
            {mode === "login" ? <Login /> : <Signup />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthGate;