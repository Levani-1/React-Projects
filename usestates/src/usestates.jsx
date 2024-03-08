import React, { useState } from "react";

function States() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const [rate, setRate] = useState("");
    const [feedback, setFeedback] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }
    function handleAgeChange(event) {
        setAge(event.target.value);
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }
    function handleRateChange(event) {
        setRate(event.target.value);
    }
    function handleFeedbackChange(event) {
        setFeedback(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange} placeholder="Enter Real Name"/>
            <h1>Real Name: {name}</h1>
            <input value={age} onChange={handleAgeChange} type="number"  placeholder="Enter UserName"/>
            <h1>Age: {age}</h1>
            <textarea value={password} onChange={handlePasswordChange}  placeholder="Enter Age"/>
            <h1>Password: {password} </h1>
            <select value={rate} onChange={handleRateChange}>
                <option value="">Rate us</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <div>
                <input type="radio" value="Good" onChange={handleFeedbackChange} />
                <label>Good</label>
                <input type="radio" value="Normal" onChange={handleFeedbackChange} />
                <label>Normal</label>
                <input type="radio" value="Bad" onChange={handleFeedbackChange} />
                <label>Bad</label>
            </div>
        </div>
    );
}

export default States;
