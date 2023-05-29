import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [formInfo, setFormInfo] = useState({})

    return (
        <AuthContext.Provider value={{
            auth, setAuth,formInfo,setFormInfo
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;