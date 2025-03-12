

import React, {useState , useEffect, useRef} from "react";

function StopWatch() {

    const [isRunning ,setisRunning] = useState(false);
    const [elapasedTime , setElapasedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapasedTime(Date.now() - startTimeRef.current);
            },10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning]
);

function start() {
    setisRunning(true);
    startTimeRef.current  = Date.now() - elapasedTime;

}

function stop() {
    setisRunning(false);
    
}

function reset() {
     setElapasedTime(0);
     setisRunning(false);
}

function formatTime() {
    let hours = Math.floor(elapasedTime/(1000 * 60 *60));
    let minutes = Math.floor(elapasedTime/(1000 * 60) %60);
    let seconds = Math.floor(elapasedTime/(1000 )%60);
    let milliseconds = Math.floor((elapasedTime % 1000)/10 );

   return `${minutes}:${seconds}:${milliseconds}`; 
}

    return(<div className = "stopwatch">
        <div className = "display">{formatTime()} </div>
            <div className = "controls">
                <button onclick ={start} className = "start-button">Start</button>
                <button onclick ={stop} className = "stop-button">Stop</button>
                <button onclick ={reset} className = "reset-button">Reset</button>
            
            </div>
      

    </div>);

}

export default StopWatch

