import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './messageSender';
import Post from './Post';


function Feed() {
    return (
        <div>
        <StoryReel />
        <MessageSender />
        <Post 
            profilepic="https://source.unsplash.com/random"
            message="yoo this is message"
            timestamp="1601493943737"
            imgname="imgName"
            username="Jay Patel"

        /> 
        <Post 
            profilepic="https://source.unsplash.com/random"
            message="yoo this is message"
            timestamp="1601493943737"
            imgname="imgName"
            username="Jay Patel"

        /> 
        <Post 
            profilepic="https://source.unsplash.com/random"
            message="yoo this is message"
            timestamp="1601493943737"
            imgname="imgName"
            username="Jay Patel"

        /> 
        <Post 
            profilepic="https://source.unsplash.com/random"
            message="yoo this is message"
            timestamp="1601493943737"
            imgname="imgName"
            username="Jay Patel"

        /> 
        
        </div>
    )
}

export default Feed
