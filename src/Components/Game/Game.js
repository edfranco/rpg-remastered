import React, { Component } from 'react';
// internal components
import Profile from '../Profile/Profile';
import StatRoll from './StatRoll/StatRoll';
import CharnameForm from './CharnameForm/CharnameForm';
import { SKILLS } from '../../Constants/constants';
// internal styles
import './Game.css'



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
        displayStat: false,
        displayStatRoll: false
    };

    setStat = () => {
        const hasExceededArrLimit = this.state.skillIndex >= SKILLS.length - 1;
        const stat = Math.floor(Math.random() * 20) + 1;
        this.setState({
            [SKILLS[this.state.skillIndex]]: stat,
            skillRank: stat,
            skillIndex: hasExceededArrLimit ? 0 : this.state.skillIndex + 1,
            displayStat: true
        });
    };

    submitName = () => {
        this.setState({ displayStatRoll: true });
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className="game">
                {this.state.displayStatRoll
                    ? <StatRoll skillIndex={this.state.skillIndex} skillRank={this.state.skillRank} setStat={this.setStat} displayStat={this.displayStat} />
                    : <CharnameForm name={this.state.name} handleChange={this.handleChange} submitName={this.submitName} />
                }
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
