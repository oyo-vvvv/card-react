import React, { useState } from "react";
import Navbar from "../Navbar/Navbar"
import "./Counter.css"

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const Increment = () => {
    setCounter(counter + 1)
  } 
  const Decrement = () => {
    setCounter(counter - 1)
  } 
  const Reset = () => {
    setCounter(0)
  }
  return ( 

    <div>
       <Navbar/>
       
      <div id="counting">{counter}</div>
        <div id="counter">
      <button class="button-1" onClick={()=> Increment()} >Increment +{counter}</button>
      <button class="button-1" onClick={()=> Decrement()} >Decrement -{counter}</button>
      <button class="button-1" onClick={()=> Reset()} >Reset {counter}</button>
      </div>
    </div>
  );
};

export default Counter;
