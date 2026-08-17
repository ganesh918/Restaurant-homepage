import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("tastenest_user");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("tastenest_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("tastenest_user");
    }
  }, [user]);

  const login = ({ name, email }) => {
    setUser({ name: name || email.split("@")[0], email });
  };

  const signup = ({ name, email }) => {
    setUser({ name, email });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);