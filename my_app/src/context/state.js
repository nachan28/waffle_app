import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const EmailContext = createContext();
const PasswordContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [isAuth, setIsAuth] = useState(false);
    const [ user, setUser ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const value = {isAuth, setIsAuth, user, setUser, email, setEmail, password, setPassword};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}