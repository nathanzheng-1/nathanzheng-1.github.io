import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './Sidebar.css'
import pfp from "../../images/profilepic.jpg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import GitHubIcon from '@mui/icons-material/GitHub';
import FeedIcon from '@mui/icons-material/Feed';
import IconButton from '@mui/material/IconButton';


const icons = [
    {
        name: "GitHub",
        link: "https://github.com/nathanzheng-1",
        icon: <GitHubIcon fontSize='large' />
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/nathanqzheng/",
        icon: <LinkedInIcon fontSize='large' />
    },
    {
        name: "Email",
        link: "mailto:nqz2@cornell.edu",
        icon: <EmailIcon fontSize='large' />
    },
    {
        name: "Resume",
        link: "https://docs.google.com/document/d/1I_ZpJBdvub65yJfEHtW7BwwnL35wWY8LD5khhjHZxPE/edit?usp=sharing",
        icon: <FeedIcon fontSize='large' />
    }
]



export default function Sidebar(props) {
    const links = props.children;
    return (
        <div className='sticky-sidebar'>
            <div className='sidebar-content'>
                <div className='center'>
                    <img src={pfp} className='profile-picture' />
                </div>


                <div className="page-nav">
                    {links.map((route) => (
                        <Link key={route.name} to={route.path}
                            children={<div className="links"> {route.sidebar} </div>} style={{ textDecoration: 'none' }}
                        />))}
                </div>
                <div className="nav-icons">
                    {icons.map((icon) => (
                        <span className='invert'>
                            <IconButton
                                href={icon.link}
                                className="nav-icon"
                                title={icon.name}
                                color="inherit"

                            >
                                {icon.icon}
                            </IconButton></span>))}
                </div>





            </div>
        </div>
    )
}