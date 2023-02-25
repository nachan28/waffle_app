import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [isAuth, setIsAuth] = useState();
    const value = {isAuth, setIsAuth};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}