import React, { useEffect, useState } from "react";
// import ProducingSkills from './ProducingSkills'
import CodingSkills from "./CodingSkills";
import aos from "aos";
import { Link } from "react-router-dom";

export default function Skills() {


  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="my-5  cardClass">
      <div className="row d-flex justify-content-center   m-4 p-1  ">
        <div className="w-75 ">
          <div
            className="h1 text-center mt-4  text-name about-heading   "
            data-aos="fade-down"
          >
            My Skills
          </div>

          <hr className="hr hr-blurry" />
          <div className="row skills-colsMain">
            <div
              className=" col  skills-cols d-flex align-items-center justify-content-center  display-3 "
              data-aos="fade-right"
            >
                
          <Link to={"/coding"} style={{all:"unset"}}> Coding</Link>
            </div>

            <div
              className=" col   mt-3   skills-cols text-center d-flex align-items-center justify-content-center display-4"
              data-aos="fade-left"
            >
              
                              
          <Link to={"/music-production"} style={{all:"unset"}}> Music Production </Link>
            </div>
          </div>
        </div>

        <div className="row"></div>
      </div>
    </div>
  );
}
