import React, { useState } from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import { Col, Container, Row } from "react-bootstrap";
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
              <Typist
                  key={currentTextCounter}
                  onTypingDone={() => {
                      if (currentTextCounter < texts.length - 1) {
                          setCurrentTextCounter(currentTextCounter + 1);
                      } else {
                          setCurrentTextCounter(0);
                      }
                  }}
                  className="myType"
                  cursorClassName="myCursor"
                  cursor={{element: "_"}}
                  style={{display: "inline-block", marginLeft: "20px"}} // Add margin for spacing
              >
                  {texts[currentTextCounter]}
                  <Typist.Backspace count={28} delay={4000}/>
              </Typist>
          </div>
</div>

)
    ;
}
