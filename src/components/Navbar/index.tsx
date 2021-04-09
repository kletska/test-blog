import React, { useState, FormEvent } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Navbar: React.FC = (props) => {
    const [search, setSearch] = useState('searchInput');

    const openSearch = () => {
        setSearch('searchInput active');
    } 

    const submitSearch = (event: FormEvent) => {
        event.preventDefault();
        alert('Searched')
    }

    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/post">Posts</NavLink></li>
                <li><NavLink to="/about-me">About Me</NavLink></li>
                <li><NavLink to="/contact-me">Constacts</NavLink></li>
            </ul>
            <div className="search">
                <form onSubmit={submitSearch}>
                    <input type="text"className={search} placeholder="search"/>
                    <img onClick={openSearch} className="searchIcon" src={require('../../../public/logo.png')}alt="Search"/>
                </form>
            </div>
        </div>
    );
}

export default Navbar;