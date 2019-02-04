import React, { Component } from 'react';
import logo from '../logo.svg';
import './Page.css'


const Page2 = ({ onRouteChange }) => 
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Page 2
            </p>
            <div>
                <button className="button buttonActive" onClick={() => onRouteChange('page1')} >Page1</button>
                <button className="button buttonMuted" onClick={() => onRouteChange('page2')} >Page2</button>
                <button className="button buttonActive" onClick={() => onRouteChange('page3')} >Page3</button>
            </div>
        </header>
    </div>


export default Page2;