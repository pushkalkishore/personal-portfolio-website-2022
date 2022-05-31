import React from "react";
import bg4 from "./bg4.jpg"
import "./ContactMe.css"
import { Parallax } from "react-parallax";


export default function ContacMe(){
    return (

        <Parallax bgImage={bg4} strength={300}>
        <div className="contactme">
        
           <h1>Contact Me</h1>
            <p>
            Have a new project in mind? Let's collaborate and build something awesome. Let's turn that idea to an even greater product :)
            </p>
            <p>
               Lets Talk
            </p>
        
        </div>
        </Parallax>
    )
}