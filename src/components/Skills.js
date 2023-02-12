import React, { useEffect, useState } from 'react'
// import ProducingSkills from './ProducingSkills'
import CodingSkills from './CodingSkills'
import aos from 'aos';

export default function Skills() {
    const [codingDisplay, setCodingDisplay] = useState("block");
    const [musicDisplay, setMusicDisplay] = useState("block");

    const codingBtn = () => {
        if (codingDisplay === "None") {
            setCodingDisplay("block");
            setMusicDisplay("None");
        }
        else {
            setCodingDisplay("None");
            setMusicDisplay("Block");

        }
    }
    const musicBtn = () => {
        if (musicDisplay === "None") {
            setCodingDisplay("None");
            setMusicDisplay("Block");
        }
        else {
            
            setCodingDisplay("block");
            setMusicDisplay("None");
        }
    }



    useEffect(() => {
        aos.init({duration:1000});
    }, [])

    return (
        <div className='my-5  cardClass'  >
            <div className="row d-flex justify-content-center   m-4 p-1  ">
                <div className='w-75 '>
                    <div className="h1 text-center mt-4  text-name about-heading   " data-aos="fade-down">My Skills
                    </div>


                    <hr className="hr hr-blurry" />

                    <div className="row skills-colsMain" >


                        <div className=" col  skills-cols d-flex align-items-center justify-content-center  display-3 " onClick={codingBtn} data-aos="fade-right" >
                            Coding

                        </div>




                        <div className=" col   mt-3   skills-cols text-center d-flex align-items-center justify-content-center display-4" data-aos="fade-left" onClick={musicBtn}>

                            Music Production
                        </div>


                    </div>





                </div>

                <div className='row'>

                    <CodingSkills codingDisplay={codingDisplay} />

                    {/* <ProducingSkills musicDisplay={musicDisplay} /> */}
                    



                </div>

            </div>

        </div>
    )
}
