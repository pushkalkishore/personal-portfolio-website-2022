import React from "react";
import { Parallax } from "react-parallax";
import bg from "./bg4.jpg";
import "./IntroPage.css"
import Typewriter from "typewriter-effect"

export default function IntroPage(){
    return (
        <Parallax bgImage={bg} strength={300}>
        <div className="intropage">
            <h1>Pushkal Kishore</h1>
            <div className="typewriter">
            <Typewriter
                options={{
                    strings: ["Programmer", "Developer", "Cool Guy" , "Learner", "Thinker"],
                    autoStart: true,
                    loop: true,
                }}
			/>
            </div>
        </div>
        </Parallax>
    )
}