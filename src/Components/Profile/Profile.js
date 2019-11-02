import React, { Component } from 'react';
// internal styles
import './Profile.css';

class Profile extends Component {
    state = {
        health: 0,
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligenece: 0,
        wisdom: 0,
        charisma: 0,
    }

    render() {
        return (
            <div className="profile">
                <h1>You</h1>
                <h4>HP:{this.state.health}</h4>
                <img className="user-image" src="https://i.imgur.com/lixfsa3.jpg" />
                <ul>
                    <li>Strength: {this.state.strength} </li>
                    <li>Dexterity: {this.state.dexterity}</li>
                    <li>Constituion: {this.state.constitution}</li>
                    <li>Intelligence: {this.state.intelligenece}</li>
                    <li>Wisdom: {this.state.wisdom}</li>
                    <li>Charisma {this.state.charisma}</li>
                </ul>
            </div>
        );
    };
};

export default Profile;
