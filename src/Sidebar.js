import React from 'react';
import {Avatar} from "@material-ui/core";
import profilebackground from './profile-background.jpg'
import './Sidebar.css';
import { useSelector } from 'react-redux';
import {selectUser} from './features/userSlice';


function Sidebar(props) {
    const user = useSelector(selectUser);
    const recentItem = (topic) =>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={profilebackground}
                 alt=""/>
                <Avatar src={user.photoUrl} className="sidebar__avatar">
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">1,500</p>
                </div>
                <div className="sidebar__stat">
                    <p>views on post</p>
                    <p className="sidebar__statNumber">1,500</p>
                </div>
            </div>

           <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("Programming")}
                {recentItem(".Net core")}
                {recentItem("WIndows Forms")}
                {recentItem("React")}
           </div>

            
        </div>
    );
}

export default Sidebar;