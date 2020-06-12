import React, { useState } from "react";
import "./App.css";
import { Message } from "./Message.js";

function App() {
    let [count, setCount] = useState(1);
    let [isDay, setDay] = useState(true);

    return ( <
        div className = { `box ${isDay ? "daylight" : ""}` } >
        <
        h1 > Good { isDay ? "Morning" : "Night" } < /h1> <Message counter={count} / >
        <
        br / >
        <
        button onClick = {
            () => setCount(++count) } > Updated Counter < /button>{" "} <
        button onClick = {
            () => setDay(!isDay) } > Update Day < /button>{" "} <
        /div>
    );
}

export default App;