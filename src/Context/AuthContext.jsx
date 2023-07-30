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

    const [loginError, setLoginError] = useState(null)
    const [isLoginLoading, setIsLoginLoading] = useState(false)

    const [loginInfo, setLoginInfo] = useState(
        {
            email: "",
            password: ""
        }
    )

    console.log(loginInfo);

    useEffect(() => {
        const user = localStorage.getItem("User")
        setUser(JSON.parse(user))
    }, [])

    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info)
    }, []);

    const updateLoginInfo = useCallback((info) => {
        setLoginInfo(info)
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
    }, [registerInfo]);

    const loginUser = useCallback(async (e) => {
        e.preventDefault();
        setIsLoginLoading(true);
        setLoginError(null)
        const response = await postRequest(`${baseUrl}/users/login`, JSON.stringify(loginInfo))

        setIsLoginLoading(false)
        if (response.error) {
            return setLoginError(response)
        }

        localStorage.setItem("User", JSON.stringify(response))
        setUser(response)
    }, [loginInfo])

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
        logOut,
        loginUser,
        loginError,
        loginInfo,
        updateLoginInfo,
        isLoginLoading
    }

    return (
        <AppContext.Provider value={contextData}>
            {children}
        </AppContext.Provider>
    );
};

export default AuthContext;