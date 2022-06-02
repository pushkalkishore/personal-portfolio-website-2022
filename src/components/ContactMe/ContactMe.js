import React from "react";
import bg4 from "./bg4.jpg"
import "./ContactMe.css"
import { Parallax } from "react-parallax";
import Container from "../Container/Container";


export default function ContactMe(){
    return (

        <Parallax bgImage={bg4} strength={300}>
        <div className="contactme">
        <Container heading="Contact Me" footer={<button className="ctaButton">Lets Talk</button>}>
            <div className="space">
            <p>
            Have a new project in mind? Let's collaborate and build something awesome. Let's turn that idea to an even greater product :)
            </p>
            </div>
        </Container>
        </div>
        </Parallax>
    )
}