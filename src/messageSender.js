
import { Avatar,Input} from '@material-ui/core';
import React,{useState} from 'react';
import './messageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import axios from "axios";



function MessageSender() {
    const [input,setInput] = useState("");
    const [image,setImage] = useState("");


     function handelclick(event){
        event.preventDefault();
        
//    const newnote= new FormData();
//     newnote.append("myImage",image);
//     // newnote.append("name",input);

//     axios.post('http://localhost:4000/tinder/card',newnote);
//     console.log("done");

     }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src="https://source.unsplash.com/random" />
                <form>
                   <input type="text" classname="messageSender__input" value={input}
                    onChange={(e)=>setInput(e.target.value)}/>

                    <Input type="file"
                    className="messageSender__fileselector"
                    onChange={(e)=>setImage(e.target.value)}
                   />
                 
                 <button onclick={handelSubmit} type='submit'>Hiddend</button>
                </form>
            </div>


            <div className="messageSender__bottom">
                <div className="messageSender__option">
                <VideocamIcon style={{color:'red'}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                <PhotoLibraryIcon style={{color:'green '}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                <InsertEmoticonIcon style={{color:'orange'}} />
                    <h3>felling/Activity</h3>
                </div>

            </div>
            
        </div>
    )
}

export default MessageSender
