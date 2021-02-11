import React,{useState} from 'react'
import './ChatInput.css';
import db from './firebase';
import firebase from 'firebase';
import {useStateValue} from './StateProvider';
import './ChatInput.css';
function ChatInput({channelName,channelId}) {
    const[input,setInput]=useState('');
    const [{user}]=useStateValue();

    const sendMessage=(e)=>{
        e.preventDefault();

        if (channelId){
            db.collection('rooms').doc(channelId).collection('messages')
            .add({
                message:input,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                username:user?.displayName,
                userimage:user?.photoURL
            })
        }
        setInput('')
    }

    return (
        <div className="chatinput">
            <form>
                <input 
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                type="text"
                 placeholder={`message ${channelName}`}
                 />
                <button type="submit" onClick={sendMessage}>send</button>
            </form>
        </div>
    )
}

export default ChatInput
