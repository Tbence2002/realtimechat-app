import React from 'react'
import SendChat from '../components/chat/SendChat'
import ChatContent from '../components/chat/ChatContent'

function Chat() {
  return (
    <div className='chat-container'>
        <ChatContent />
        <SendChat />
    </div>
  )
}

export default Chat