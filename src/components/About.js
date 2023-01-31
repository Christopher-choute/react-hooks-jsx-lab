import React from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import { image } from "../data/data";

function About() {
  return <div id = 'about'>
    <h2>About Me</h2>
    <p>you can not say pop and forget the smoke</p>
    <img src ={image} alt = 'I made this'></img>
  </div>;
}

export default About;
