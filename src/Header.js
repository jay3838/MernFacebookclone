import React from 'react'
import './Header.css';
import {Avatar,IconButton} from '@material-ui/core';

import SearchIcon  from '@material-ui/icons/Search';
import Home  from '@material-ui/icons/Home';
import Flag  from '@material-ui/icons/Flag';
import SubscriptionsOutlined  from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlined  from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCrircle  from '@material-ui/icons/SupervisedUserCircle';

import AddIcon  from '@material-ui/icons/Add';
import ForumIcon  from '@material-ui/icons/Forum';
import NotificationsActiveIcon  from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon  from '@material-ui/icons/ExpandMore';


function Header() {
    return (
        <div className="header">
            <div className="header__left">
            <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" alt="hi"/> 
            </div>
        
       


        <div className="header__input">
        <SearchIcon/>
        <input placeholder="search"
            type="text"
        />
        </div>

        <div className="header__center">
        <div className="header__option"><Home fontsize="large"/></div>
        <div className="header__option"><Flag fontsize="large"/></div>
        <div className="header__option"><SubscriptionsOutlined  fontsize="large"/></div>
        <div className="header__option"><StorefrontOutlined  fontsize="large"/></div>
        <div className="header__option"><SupervisedUserCrircle  fontsize="large"/></div>
        </div>


        <div className="header__right">
            <div className="header__info">
                <IconButton>
                <Avatar/>
                </IconButton>
                <h4>Jay</h4>
            </div>
            <IconButton>

            <AddIcon/>
            </IconButton>
            <IconButton>
            <ForumIcon />

            </IconButton>
            <IconButton>
            <NotificationsActiveIcon/>

            </IconButton>
            <IconButton>
            <ExpandMoreIcon/>

            </IconButton>

        </div>



        </div>

       
        
    )
}

export default Header
