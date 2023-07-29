import React, { useCallback } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const AppContext = createContext(null);

const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [registerInfo, setRegisterInfo] = useState(
        {
            name: "",
            email: "",
            password: ""
        }
    )

    console.log(registerInfo);

    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info)
    }, [])

    const contextData = {
        user,
        registerInfo,
        updateRegisterInfo
    }

    return (
        <AppContext.Provider value={contextData}>
            {children}
        </AppContext.Provider>
    );
};

export default AuthContext;