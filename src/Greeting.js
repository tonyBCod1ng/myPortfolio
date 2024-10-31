import React, { useState } from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import {ReactTyped, Typed} from "react-typed";
export default function Greeting() {
  const texts = [
    "Nice to meet you!",
    "Welcome to my site!",
    `Here is a bit about me!`,
    "....Get it?",
    "A BIT??!!!",
    "Nevermind.....",
  ];
  const [currentTextCounter, setCurrentTextCounter] = useState(0);

  return (
      <div className={"row text-center row-cols-2"} style={{height: "550px"}}>
          <div className={"col col-8"} style={{marginTop: "209px", fontSize: "50pt", position: "relative"}}>
              <span style={{position: "absolute", left:150}}>></span>
              <ReactTyped strings={texts} typeSpeed={71} backSpeed={40} backDelay={1500} loop/>

          </div>
</div>

)
    ;
}
