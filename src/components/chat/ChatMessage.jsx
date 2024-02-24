import React from 'react'
import { UserAuth } from '../../context/AuthContext'
import { MdDelete } from "react-icons/md";

function ChatMessage({ message, onDeleteMessage }) {
    const { currentUser } = UserAuth();

    const handleDelete = () => {
        onDeleteMessage(message.id);
    };
    
    return (
        <div className='chat-message-container pb-5'>
            <div className={`chat mx-2 ${message.uid === currentUser.uid ? "chat-end" : "chat-start"}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt={message.name} src={message.avatar} />
                    </div>
                </div>
                <div className="chat-header flex gap-2 items-center pb-1">
                    {message.name}
                    {message.uid === currentUser.uid ? <MdDelete className='text-primary cursor-pointer' onClick={handleDelete} /> : ""}
                </div>
                <div className="chat-bubble">
                    {message.text}
                </div>
            </div>
        </div>
    )
}

export default ChatMessage