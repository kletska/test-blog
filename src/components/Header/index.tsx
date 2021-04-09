import React from 'react';
import './style.css';

const Header = (props) => {
    return (
        <header className="header">
            <nav className="headerMenu">
                <a className="menuElement" href="./">Home</a>
                <a className="menuElement" href="./News">News</a>
                <a className="menuElement" href="#">Researches</a>
                <a className="menuElement" href="#">About Me</a>
            </nav>
            <div className="space"></div>
            <div className="icons">
                <img className="icon" src={require('./iconfinder_telegram_401554.png')}alt="Search"/>
                <img className="icon" src={require('./iconfinder_github-square-social-media_764894.png')}alt="Search"/>
            </div>
        </header>
    )
}

export default Header;