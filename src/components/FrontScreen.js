import React from "react";
import About from "./About";
import Skills from "./Skills";

import CodingSkills from "./CodingSkills";
import Contact from "./Contact";
export default function FrontScreen() {
  return (
    <div className="cardClass">
      <div className="top-div">
        <div className=" heading-content text-center   ">
          <div className=" display-1 text-hello  ">
            <h1>Hello, I'm </h1>
          </div>

          <div className=" display-4  ">Manglesh Kumar</div>

          <div className=" display-6 text-caption my-4 ">Welcome Visitor</div>
        </div>
      </div>

      <About />
      <Skills />

      <CodingSkills />
      <Contact />
    </div>
  );
}
