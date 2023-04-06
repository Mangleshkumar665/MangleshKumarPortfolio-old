import React from "react";
import About from "./About";
import Skills from "./Skills";
import { motion } from "framer-motion";
import CodingSkills from "./CodingSkills";
import Contact from "./Contact";
export default function FrontScreen() {
  let name = ["M","a","n","g","l","e","s","h", " ", "K","u","m","a","r"];

  let welcome = ["W","e","l","c","o","m","e"," ","V","i","s","i","t","o","r"]
  
  return (
    <div className="cardClass">
      <div className="top-div">
        <div className=" heading-content text-center   ">
          <div className=" display-1 text-hello  ">
            <h1 className="d-flex">
              <motion.div
                whileHover={{ scale: [null, 1.1, 1.1] }}
                transition={{ duration: 0.3 }}
              >
                {" "}
                H
              </motion.div>
              <motion.div
                whileHover={{ scale: [null, 1.1, 1.1] }}
                transition={{ duration: 0.3 }}
              >
                e
              </motion.div>
              <motion.div
                whileHover={{ scale: [null, 1.1, 1.1] }}
                transition={{ duration: 0.3 }}
              >
                l
              </motion.div>
              <motion.div
                whileHover={{ scale: [null, 1.1, 1.1] }}
                transition={{ duration: 0.3 }}
              >
                l
              </motion.div>
              <motion.div
                whileHover={{ scale: [null, 1.1, 1.1] }}
                transition={{ duration: 0.3 }}
              >
                o
              </motion.div>
              <motion.div
                whileHover={{ scale: [null, 1.1, 1.1] }}
                transition={{ duration: 0.3 }}
              >
                , &nbsp;
              </motion.div>

              <motion.div
                whileHover={{ scale: [null, 1.1, 1.1] }}
                transition={{ duration: 0.3 }}
              >
                I
              </motion.div>
              <motion.div
                whileHover={{ scale: [null, 1.1, 1.1] }}
                transition={{ duration: 0.3 }}
              >
                '
              </motion.div>
              <motion.div
                whileHover={{ scale: [null, 1.1, 1.1] }}
                transition={{ duration: 0.3 }}
              >
                m
              </motion.div>
            </h1>
          </div>

          {/* <div className=" display-4  ">Manglesh Kumar</div> */}
          
          <div className="d-flex">
          {name.map((letter)=> <motion.div className="display-4" 
            whileHover={{ scale: [null, 1.1, 1.1] }}
            transition={{ duration: 0.3 }}
          >
            {letter === " "?  String.fromCharCode(5)  : letter}
          </motion.div> ) }
          </div>

          <div className=" display-6 text-caption my-4 ">
            
            <div className="d-flex"> 
            {welcome.map((letter)=> <motion.div className="" 
            whileHover={{ scale: [null, 1.1, 1.1] }}
            transition={{ duration: 0.3 }}
          >
            {letter === " "? <div className="mx-1"></div>   : letter}
          </motion.div> ) }
            
            </div>
            

          
          
          
          </div>
        </div>
      </div>

      <About />
      <Skills />

      <CodingSkills />
      <Contact />
    </div>
  );
}
