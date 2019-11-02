import React from 'react';

const CharnameForm = ({ name, handleChange, submitName }) => {
    return (
        <div className="charname-form">
            <h1>What is your name?</h1>
            <input type="text" name="name" value={name} onChange={handleChange} />
            <button onClick={submitName}>Submit</button>
        </div>
    );
};

export default CharnameForm;
