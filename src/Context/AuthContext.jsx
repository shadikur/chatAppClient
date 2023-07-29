import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { baseUrl, postRequest } from '../utils/services';

export const AppContext = createContext(null);

const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [registerError, setRegisterError] = useState(null)
    const [isRegisterLoading, setIsRegisterLoading] = useState(false)
    const [registerInfo, setRegisterInfo] = useState(
        {
            name: "",
            email: "",
            password: ""
        }
    )

    useEffect(() => {
        const user = localStorage.getItem("User")
        setUser(JSON.parse(user))
    }, [])

    console.log(user);

    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info)
    }, []);

    const registerUser = useCallback(async (e) => {
        e.preventDefault();
        setIsRegisterLoading(true)
        setRegisterError(null)
        const response = await postRequest(`${baseUrl}/users/register`, JSON.stringify(registerInfo));

        setIsRegisterLoading(false)
        if (response.error) {
            return setRegisterError(response)
        }
        localStorage.setItem("User", JSON.stringify(response))
    }, [registerInfo])

    const logOut = useCallback(() => {
        localStorage.removeItem("User");
        setUser(null)
    }, [])

    const contextData = {
        user,
        registerInfo,
        updateRegisterInfo,
        registerUser,
        registerError,
        isRegisterLoading,
        logOut
    }

    return (
        <AppContext.Provider value={contextData}>
            {children}
        </AppContext.Provider>
    );
};

export default AuthContext;