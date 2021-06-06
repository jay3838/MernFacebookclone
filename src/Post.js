import React from 'react';
import { Avatar} from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import AccountCircleIclon from '@material-ui/icons/AccountCircle';
import './Post.css';


function Post({profilepic,imagename,username,timestamp,message}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilepic} className="post__avatar"/>
                <div className="post__topinfo">
                    <h3>{username}</h3>
                    <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>
                    <div className="post__options">
                        <div className="post__opt">
                            <ThumbUpIcon />
                            <p>Like</p>
                        </div>
                        <div className="post__opt">
                            <ChatBubbleOutlineIcon />
                            <p>Comment</p>
                        </div>
                        <div className="post__opt">
                            <NearMeIcon />
                            <p>Share</p>
                        </div>
                        <div className="post__opt">
                            <AccountCircleIclon />
                            <ExpandMoreOutlined />
                            <p>Share</p>
                        </div>
                    </div>  
        </div>
    )
}

export default Post
