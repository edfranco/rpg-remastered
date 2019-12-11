import React from 'react';
// internal styles
import './Profile.css';

const Profile = ({ strength,
    name,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
    hp,
    dmg
}) => {
    return (
        <div className="profile">
            <h1>{name}</h1>
            <div className="battle-stats">
                <h4>HP: {hp} </h4>
                <h4>DMG: {dmg}</h4>
            </div>

            <img className="user-image" src="https://i.imgur.com/lixfsa3.jpg" alt="your character" />
            <form enctype="multipart/form-data">
                <label>Image</label>
                <input type='file' name='image' />
            </form>
            <ul>
                <li>Strength: {strength} </li>
                <li>Dexterity: {dexterity}</li>
                <li>Constituion: {constitution}</li>
                <li>Intelligence: {intelligence}</li>
                <li>Wisdom: {wisdom}</li>
                <li>Charisma {charisma}</li>
            </ul>
        </div>
    );
};

export default Profile;
