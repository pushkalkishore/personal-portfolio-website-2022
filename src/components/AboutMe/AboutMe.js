import React from "react";
import bg3 from "./bg3.jpg"
import "./AboutMe.css"
import { Parallax } from "react-parallax";
import Container from "../Container/Container";


export default function AboutMe(){
    return (
        <Parallax bgImage={bg3} strength={300}>
        <div className="background">
        <Container heading={"About Me"} footer="P.S. I am a Marvel Fan" className="aboutme">
            <p>Hi, I’m Pushkal Kishore. I am currently in my IIIrd year pursuing Electrical And Electronics Engineering at BIT Mesra. My interests lie in programming, web development and problem solving. 
            </p>
        </Container>
        </div>
        </Parallax>
    )
}