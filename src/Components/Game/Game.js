import React, { Component } from 'react';
// internal components
import Profile from '../Profile/Profile';
// internal styles
import './Game.css'

const SKILLS = [
    'strength',
    'dexterity',
    'constitution',
    'intelligence',
    'wisdom',
    'charisma'
]

class Game extends Component {
    state = {
        skillIndex: 0,
        skillRank: 0,
        name: 'Adventurer',
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
        hp: 0,
        dmg: 0,
        displayStat: false
    };

    setStat = () => {
        const hasExceededArrLimit = this.state.skillIndex >= SKILLS.length - 1;
        const stat = Math.floor(Math.random() * 20) + 1;
        this.setState({
            [SKILLS[this.state.skillIndex]]: stat,
            skillIndex: hasExceededArrLimit ? 0 : this.state.skillIndex + 1
        });
    };

    render() {
        return (
            <div className="game">
                <div>
                    <h1>Roll the Dice For Stats</h1>
                    <h4>Roll for {SKILLS[this.state.skillIndex]}</h4>
                    {this.state.displayStat && <p>Your {SKILLS[this.state.skillIndex]} is now {this.state.skillRank}  </p>}
                    <button onClick={this.setStat}>Roll</button>
                </div>
                <div className="profile-container">
                    <Profile
                        name={this.state.name}
                        strength={this.state.strength}
                        dexterity={this.state.dexterity}
                        constitution={this.state.constitution}
                        intelligence={this.state.intelligence}
                        wisdom={this.state.wisdom}
                        charisma={this.state.charisma}
                        hp={this.state.hp}
                        dmg={this.state.dmg}
                    />
                </div>
            </div>
        );
    };
};

export default Game;
