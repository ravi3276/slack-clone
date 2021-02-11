import React,{useState, useEffect} from 'react'
import './Chat.css';
import {useParams} from 'react-router-dom';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';
import db from './firebase';
import Message from './Message';
function Chat() {
    const {roomId}=useParams();
    const [roomDetails,setRoomDetails]=useState(null);
    const [roomMessages,setRoomMessages]=useState([]);
    useEffect(() => {
        db.collection('rooms').doc(roomId).onSnapshot(snapshot=>(
            setRoomDetails(snapshot.data())
        ))
    },[roomId])
            // console.log(roomDetails);

    useEffect(() => {
        db.collection('rooms').doc(roomId)
        .collection('messages')
        .orderBy('timestamp','asc')
        .onSnapshot(snapshot=>(
            setRoomMessages(snapshot.docs.map(doc=>doc.data()))
        ))
    })
    // console.log(roomMessages);
    return (
        <div className="chat">
            <div className="chat__header">
                    <div className="chat__left">
                    <h4>
                    <strong># {roomDetails?.name || "channel"}</strong>
                    <StarBorderIcon />
                    </h4>
                    </div>

                    <div className="chat__right">
                    <p>
                    <InfoIcon />
                        Details
                        </p>
                    </div>
            </div>
            
            <div className="chat__message">
                {
                    roomMessages.map(({message,username,userimage,timestamp})=>(
                        <Message
                        message={message}
                        username={username}
                        userimage={userimage}
                        timestamp={timestamp} 
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Chat
