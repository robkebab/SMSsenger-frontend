import React, {useState, useEffect} from 'react';
import {localURL} from '../services/variables'
import { ActionCable } from 'react-actioncable-provider'
import axios from 'axios'
import Message from './Message';

const MessagesCont = () => {
    const [messages, setMessages] = useState([])

    const addMessage = (message) => {
        console.log(message)
        setMessages(prev => [...prev, message])
    }

    useEffect(() => {
       const getMessages = async () => {
            let msgs = await axios.get(localURL)
            setMessages(msgs.data)
            // console.log(msgs.data)
       } 
       getMessages()
    }, [])

    return (
        <div>
            <ActionCable 
            channel={{ channel: 'SessionChannel' }}
            onReceived={addMessage}/>
            {messages.map(msg => <Message key={msg.id} message={msg} />)}
        </div>
    );
};

export default MessagesCont;