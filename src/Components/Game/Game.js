import React, { Component } from 'react';
// internal components
import Profile from '../Profile/Profile';
// internal styles
import './Game.css'

const SKILLS = [
    'Strength',
    'Dexterity',
    'Constitution',
    'Intelligenece',
    'Wisdom',
    'Charisma'
]

class Game extends Component {
    state = {
        skillIndex: 0,
        skillRank: 0,
        displayStat: false
    }

    render() {
        return (
            <div className="game">
                <div>
                    <h1>Roll the Dice For Stats</h1>
                    <h4>Roll for {SKILLS[this.state.skillIndex]}</h4>
                    {this.state.displayStat && <p>Your {SKILLS[this.state.skillIndex]} is now {this.state.skillRank}  </p>}
                    <button>Roll</button>
                </div>
                <div className="profile-container">
                    <Profile />
                </div>
            </div>
        );
    };
};

export default Game;
