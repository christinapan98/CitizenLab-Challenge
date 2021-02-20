import React, { Component } from 'react';
import labbersville from '../img/Labbersville.png';

export class Header extends Component {
    render() {
        return (
            <div className="myHeader">
                <img className="headerImg" src={labbersville}/>
                <div className="headerText">
                    <p> 
                        Welcome to the particpation platform of Labbersville. 
                        This site is dedicated to every citizen.
                    </p>
                    <p>
                        Together, we want to combine our strengths in order to collaboratively improve our city. 
                        Step by step, idea by idea, citizen by citizen! Help us out!
                    </p>
                    <p>
                        Below, you will find a list of active projects. Hover over one to get started!
                    </p>
                </div>
                
                
                
            </div>
        )
    }
}

export default Header
