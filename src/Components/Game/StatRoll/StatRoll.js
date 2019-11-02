import React from 'react';
import { SKILLS } from '../../../Constants/constants';

const StatRoll = ({ skillIndex, skillRank, setStat, displayStat }) => {
    return (
        <div className="stat-roll">
            <h1>Roll the Dice For Stats</h1>
            <h4>Roll for {SKILLS[skillIndex]}</h4>
            <button onClick={setStat}>Roll</button>
            {displayStat && <p>Your {SKILLS[skillIndex - 1]} is now {skillRank}  </p>}
        </div>
    );
};

export default StatRoll;
