import React from "react";
import bg3 from "./bg3.jpg"
import "./AboutMe.css"
import { Parallax } from "react-parallax";


export default function AboutMe(){
    return (
        <Parallax bgImage={bg3} strength={300}>
        <div className="background">
        <div className="aboutme">
            <h1>About Me</h1>
            <p>Hi, I’m Pushkal Kishore. I am currently in my IIIrd year pursuing Electrical And Electronics Engineering at BIT Mesra. My interests lie in programming, web development and problem solving. 

            </p>
            <p>
                P.S. I am a Marvel Fan
            </p>
        </div>
        </div>
        </Parallax>
    )
}