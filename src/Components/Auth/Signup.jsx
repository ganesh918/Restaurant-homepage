import { useState, useMemo } from "react";
import { useAuth } from "../../context/AuthContext";

const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
    <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

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
      <path
        d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 3l18 18M10.6 10.6a3 3 0 004.24 4.24M9.9 4.24A11.6 11.6 0 0112 4c7 0 11 7 11 7a13.6 13.6 0 01-3.1 3.9M6.1 6.1A13.6 13.6 0 001 11s4 7 11 7a10.6 10.6 0 004.9-1.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

const getStrength = (pw) => {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score; // 0–4
};

const STRENGTH_LABELS = ["Too short", "Weak", "Fair", "Good", "Strong"];
const STRENGTH_COLORS = ["#E32227", "#E32227", "#FFC222", "#8BC34A", "#00A149"];

const Signup = () => {
  const { signup } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const strength = useMemo(() => getStrength(password), [password]);
  const mismatch = confirm.length > 0 && confirm !== password;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || mismatch) return;
    signup({ name, email });
  };

  return (
    <form className="auth__form" onSubmit={handleSubmit}>
      <div className="auth__field">
        <label className="auth__label">Full Name</label>
        <div className="auth__input-wrap">
          <span className="auth__input-icon">
            <UserIcon />
          </span>
          <input
            type="text"
            className="auth__input"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="auth__field">
        <label className="auth__label">Email Address</label>
        <div className="auth__input-wrap">
          <span className="auth__input-icon">
            <MailIcon />
          </span>
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
          <span className="auth__input-icon">
            <LockIcon />
          </span>
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

        {password.length > 0 && (
          <div className="auth__strength">
            <div className="auth__strength-bar">
              <div
                className="auth__strength-fill"
                style={{
                  width: `${(strength / 4) * 100}%`,
                  background: STRENGTH_COLORS[strength],
                }}
              />
            </div>
            <span
              className="auth__strength-label"
              style={{ color: STRENGTH_COLORS[strength] }}
            >
              {STRENGTH_LABELS[strength]}
            </span>
          </div>
        )}
      </div>

      <div className="auth__field">
        <label className="auth__label">Confirm Password</label>
        <div className="auth__input-wrap">
          <span className="auth__input-icon">
            <LockIcon />
          </span>
          <input
            type={showPassword ? "text" : "password"}
            className={`auth__input ${mismatch ? "auth__input--error" : ""}`}
            placeholder="••••••••"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
        </div>
        {mismatch && (
          <span className="auth__error-text">Passwords don&rsquo;t match</span>
        )}
      </div>

      <button type="submit" className="auth__btn" disabled={mismatch}>
        Sign Up
      </button>
    </form>
  );
};

export default Signup;