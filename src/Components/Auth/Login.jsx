import { useState } from "react";
import "./Auth.css";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/footer/logo.png";

const EyeIcon = ({ open }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    {open ? (
      <>
        <path
          d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      </>
    ) : (
      <>
        <path
          d="M3 3l18 18M10.6 10.6a3 3 0 004.24 4.24M9.9 4.24A11.6 11.6 0 0112 4c7 0 11 7 11 7a13.6 13.6 0 01-3.1 3.9M6.1 6.1A13.6 13.6 0 001 11s4 7 11 7a10.6 10.6 0 004.9-1.1"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    )}
  </svg>
);

const Login = ({ onSwitch }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    login({ email });
  };

  return (
    <div className="auth">
      <div className="auth__card">
        <img className="auth__logo" src={logo} alt="TasteNest" />
        <h2 className="auth__heading">Welcome Back</h2>
        <p className="auth__subtext">Log in to continue to TasteNest</p>

        <form className="auth__form" onSubmit={handleSubmit}>
          <label className="auth__label">Email Address</label>
          <input
            type="email"
            className="auth__input"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="auth__label">Password</label>
          <div className="auth__input-wrap">
            <input
              type={showPassword ? "text" : "password"}
              className="auth__input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="auth__eye-btn"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <EyeIcon open={showPassword} />
            </button>
          </div>

          <button type="submit" className="auth__btn">
            Log In
          </button>
        </form>

        <p className="auth__switch">
          Don&rsquo;t have an account?{" "}
          <button className="auth__switch-link" onClick={onSwitch}>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;