import React, {
    useState
} from "react";
// import logo from './logo.svg';
import "./App.css";
import {
    Message
} from "./Message.js";

function App() {
    let [count, setCount] = useState(1);
    let [isDay, setDay] = useState(true);

    return (
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
        <
        div className = {
            `box ${isDay ? 'daylight' : ''}`
        } >
        <
        h1 > Good {
            isDay ? 'Morning' : 'Night'
        } < /h1>  <
        Message counter = {
            count
        }
        />  <
        br / >
        <
        button onClick = {
            () => setCount(++count)
        } > Updated Counter < /button>  

        <
        button onClick = {
            () => setDay(!isDay)
        } > Update Day < /button>

        <
        /div>
    );
}

export default App;