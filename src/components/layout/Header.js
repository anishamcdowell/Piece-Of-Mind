import React from 'react';
import logo from '../../assets/images/sun-transparent.png';


const Header = () => {
    return (
        <header className="App-header">
        <div>
          <h1>Piece of Mind</h1>
          <h2>Mood + Mental Health Tracker</h2>
          <h3>H3 test</h3>
          <p className="p-text">Welcome to Piece of Mind, an online mood and mental health tracker that provides both overview and detailed tracking of your day-to-day mood and mental shifts.</p>
        </div>
        <img src={logo} className="App-logo" alt="logo" style={{width: '40rem', height: '40rem'}}/>
      </header>
    )
}

export default Header;
