import React, { useContext } from 'react';
import { MessageContext } from '../Context/ChatContext';

const Chat = () => {
    const { userChats,
        isUserChatsLoading,
        userChatsError } = useContext(MessageContext)

    console.log(userChats);
    return (
        <div>
            <p>
                Chat
            </p>
        </div>
    );
};

export default Chat;