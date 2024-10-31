import React from "react";
import {ReactTyped} from "react-typed";
export default function Greeting() {
  const texts = [
    "Nice to meet you!",
    "Welcome to my site!",
    `Here is a bit about me!`,
    "....Get it?",
    "A BIT??!!!",
    "Nevermind.....",
  ];


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
