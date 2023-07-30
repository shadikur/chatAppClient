import React, { createContext, useEffect, useState } from 'react';
import { baseUrl, getRequest } from '../utils/services';

export const MessageContext = createContext(null);

const ChatContext = ({ children, user }) => {
    const [userChats, setUserChats] = useState(null);
    const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
    const [userChatsError, setUserChatsError] = useState(null);

    useEffect(() => {
        const getUserChats = async () => {
            if (user?._id) {
                setIsUserChatsLoading(true);
                setUserChatsError(null)
                const response = await getRequest(`${baseUrl}/chats/${user?._id}`);

                setIsUserChatsLoading(false);

                if (response.error) {
                    return setUserChatsError(response)
                }
                setUserChats(response)
            }
        }
        getUserChats();
    }, [userChats])

    const contextData = {
        userChats,
        isUserChatsLoading,
        userChatsError,
    }

    return (
        <MessageContext.Provider value={contextData}>
            {children}
        </MessageContext.Provider>
    );
};

export default ChatContext;