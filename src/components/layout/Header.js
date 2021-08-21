import React from 'react';
import logo from '../../assets/images/sun-transparent.png';


const Header = () => {
    return (
        <header className="App-header">
        <h1>Piece of Mind</h1>
        <img src={logo} className="App-logo" alt="logo" style={{width: '20.5rem', height: '20.5rem'}}/>
        <h2>Mood + Mental Health Tracker</h2>
        <h3>H3 test</h3>
        <p>Welcome to Piece of Mind, an online mood and mental health tracker that provides both overview and detailed tracking of your day-to-day mood and mental shifts.</p>
      </header>
    )
}

export default Header;
