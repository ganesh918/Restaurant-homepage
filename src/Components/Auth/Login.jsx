import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M3 6h18v12H3V6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M3 6l9 7 9-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 10V7a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const EyeIcon = ({ open }) =>
  open ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M3 3l18 18M10.6 10.6a3 3 0 004.24 4.24M9.9 4.24A11.6 11.6 0 0112 4c7 0 11 7 11 7a13.6 13.6 0 01-3.1 3.9M6.1 6.1A13.6 13.6 0 001 11s4 7 11 7a10.6 10.6 0 004.9-1.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

const Login = () => {
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
    <form className="auth__form" onSubmit={handleSubmit}>
      <div className="auth__field">
        <label className="auth__label">Email Address</label>
        <div className="auth__input-wrap">
          <span className="auth__input-icon"><MailIcon /></span>
          <input
            type="email"
            className="auth__input"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="auth__field">
        <label className="auth__label">Password</label>
        <div className="auth__input-wrap">
          <span className="auth__input-icon"><LockIcon /></span>
          <input
            type={showPassword ? "text" : "password"}
            className="auth__input auth__input--both-icons"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="auth__eye-btn"
            onClick={() => setShowPassword((p) => !p)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <EyeIcon open={showPassword} />
          </button>
        </div>
      </div>

      <button type="submit" className="auth__btn">Log In</button>
    </form>
  );
};

export default Login;