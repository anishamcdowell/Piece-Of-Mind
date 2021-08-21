import React from 'react';
import Button from '../partials/Button';

const Nav = () => {
    const blue   = '#307CBF';
    const pink   = '#F2BBD9';
    const yellow = '#F2B988';
    const orange = '#F29F80';
    const red    = '#F28177';
    return (
        <nav className="App-nav">
            <p className="nav-title">Piece of Mind</p>
            <ul className="nav-ul">
                <li><a href="/">LINK</a></li>
                <li><a href="/">LINK</a></li>
                <li><a href="/">LINK</a></li>
                <li><a href="/">LINK</a></li>
            </ul>
            <div className="btn-div">
                <Button 
                    text      = "Login" 
                    bgColor   = {blue}
                    color = "#fff"
                    fontSize  = "1.5rem"
                    marginR   = "1rem"
                />
                <Button 
                    text      = "Signup"
                    bgColor   = {blue}
                    color     = "#fff"
                    fontSize  = "1.5rem"
                />
            </div>
        </nav>
    )
}

export default Nav;
