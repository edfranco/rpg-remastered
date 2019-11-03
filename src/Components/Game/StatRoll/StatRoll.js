import React from 'react';
import { SKILLS } from '../../../Constants/constants';
// internal styles
import './StatRoll.css';

const StatRoll = ({ skillIndex, skillRank, setStat, displayStat }) => {
    return (
        <div className="stat-roll">
            <h1>Roll the Dice For Stats</h1>
            <h4>Roll for {SKILLS[skillIndex]}</h4>
            <div className="dice">
                <h1 className="d20-number">{skillRank}</h1>
            </div>
            <button onClick={setStat}>Roll</button>
            {displayStat && <p>Your {SKILLS[skillIndex - 1]} is now {skillRank}  </p>}
        </div>
    );
};

export default StatRoll;
