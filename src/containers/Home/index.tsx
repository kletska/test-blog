import React from 'react';
import Hello from '../../components/Hello';
import Login from '../../components/Login';
import './style.css';

const Home: React.FC = (props) => {
    return (
        <div>
            <Hello/>
            <Login/>
        </div>
    );
}

export default Home;