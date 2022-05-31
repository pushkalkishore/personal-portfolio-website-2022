import React from "react";
import Navbar from "./Navbar/Navbar";
import AboutMe from "./AboutMe/AboutMe";
import ContacMe from "./ContactMe/ContactMe";
import IntroPage from "./IntroPage/IntroPage";
import Divider from "./Divider/Divider";


export default function App() {
    return (
        <div>
        <IntroPage />
        <Navbar />
        <AboutMe />
        <Divider />
        <ContacMe />
        <Divider />
        </div>
    )
}