import React from "react";
import { name, city } from "../data/data.js";
// update the JSX being returned!

function Home() {
  return <div id="home"><h1 style = {divStyle}>{name} is a Web Developer from {city}</h1></div>
}

const divStyle = {
  color: "firebrick",
}

export default Home;
