import React, { useEffect, useRef, useState } from 'react'
import ChatMessage from './ChatMessage'
import { collection, query, onSnapshot, orderBy, limit, deleteDoc, doc } from "firebase/firestore";
import { db } from '../../firebase/Firebase';

function ChatContent() {
    const messagesEndRef = useRef();
    const [messages, setMessages] = useState([]);

    function scrollToBottom() {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    async function handleDeleteMessage(messageId) {
        try {
            await deleteDoc(doc(db, "messages", messageId));
        } catch (error) {
            console.error("Error deleting message:", error);
        }
    };

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    useEffect(() => {
        const q = query(collection(db, "messages"),
            orderBy("createdAt"),
            limit(50)
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages);
        });

        return () => unsubscribe;
    }, [])

    return (
        <div className='chat-content-container'>
            <div className="pb-44 pt-20 containerStyle">
                {messages.map((message) => (
                    <ChatMessage key={message.id} message={message} onDeleteMessage={handleDeleteMessage} />
                ))}
                <div ref={messagesEndRef}></div>
            </div>
        </div>
    )
}

export default ChatContent