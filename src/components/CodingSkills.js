import React, { useEffect, useState } from 'react'


import typesq from "../images/Typesq/1.jpeg"
import todo from "../images/TodoApp/4.jpeg"
import calculator from "../images/Calculator/3.jpeg"
import quiz from "../images/quizapp/2.jpeg"
import leetcode from "../images/leetcode.png"
import hackerRank from "../images/hackerrank.png"
import codechef from "../images/codechef.png"
import aos from 'aos'




export default function CodingSkilljglogos(props) {



  const codingStyle = { "display": props.codingDisplay }

  useEffect(() => {
    aos.init({duration:1000});
}, [])


  return (
    <div className="coding-class my-5 " style={codingStyle}>

      <div className=" container px-4   ">


        {/* Languages I know */}
        <div className="h1 text-left mt-4 col2-text row  ">Languages I know
        </div>
        <hr className="hr hr-blurry w-50" />

        <div className='skill-parent  col'>


          <div className=' skills-language w-50 p-2   '>

            <div className='skill1' data-aos="fade-down">

              <h3 className='my-2'> Javascript</h3>

              <div className="progress" >
                <div className="progress-bar" role="progressbar" style={{ width: "85%", backgroundColor: "#B1F6CA" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
              </div>
            </div>
            <div className='skill2' data-aos="fade-down">

              <h3 className='my-2'> Html/Css</h3>

              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: "90%", backgroundColor: "#B1F6CA" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
              </div>
            </div>

            <div className='skill3' data-aos="fade-down">

              <h3 className='my-2'> Python</h3>

              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: "50%", backgroundColor: "#B1F6CA" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
              </div>
            </div>
          </div>







          {/* Languages I know ends ------------------------------------------------------------------- */}





          <div className="h1 text-left mt-5 col2-text row  d-flex justify-content-center align-items-center  ">My Stats

            <hr className="hr hr-blurry" />



            <div className='row d-flex justify-content-center align-items-center '>

              <div className="card mb-3 col-sm stats-mainLayer   " data-aos="zoom-in" >
                <div className="row g-0  w-100 stats-body   ">
                  <div className="col-md-4 d-flex justify-content-center align-items-center stats-imgbody ">

                    <div className="chk ">
                      <div className="circlechk">
                        <img src={leetcode} className="img-fluid" style={{ width: "auto" }} alt="..." onClick={()=>{
                                    window.open('https://leetcode.com/mangleshkumar665/')
                                }} />
                      </div>
                    </div>


                  </div>
                  <div className="col-md-8   stats-info" >
                    <div className="card-body  ">
                      <h5 className="card-title  stats-superChild">Problems Solved </h5>

                      <div className='col-md-4 d-flex justify-content-center align-items-center' data-aos="fade-up">
                        125+
                      </div>



                    </div>
                  </div>
                </div>
              </div>



              <div className="card mb-3    col-sm  "data-aos="zoom-in" >
                <div className="row g-0  w-100  ">
                  <div className="col-md-4 d-flex justify-content-center align-items-center">

                    <div className="chk ">
                      <div className="circlechk">
                        <img src={hackerRank} className="img-fluid" style={{ width: "auto" }} alt="..." onClick={()=>{
                          window.open("https://www.hackerrank.com/2001640100150_2C")
                        }} />
                      </div>
                    </div>


                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title stats-superChild" >Problem Solving  </h5>

                      <div className='col-md-4 d-flex justify-content-center align-items-center '>
                        <div className='row'data-aos="fade-up">
                          <div className='col' style={{ fontSize: "1.8rem" }}> 5 <i className=" bi bi-star-fill"></i ></div>

                        </div>
                      </div>



                    </div>
                  </div>
                </div>
              </div>



              <div className="card mb-3   col-sm "data-aos="zoom-in" >
                <div className="row g-0  w-100  ">
                  <div className="col-md-4 d-flex justify-content-center align-items-center">

                    <div className="chk ">
                      <div className="circlechk">
                        <img src={codechef} className="img-fluid" style={{ width: "auto" }} alt="..." onClick={()=>{
                          window.open("https://www.codechef.com/users/mangleshkumar")
                        }} />
                      </div>
                    </div>


                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title stats-superChild"> Currently in </h5>

                      <div className='col-md-4 d-flex justify-content-center align-items-center   ' data-aos="fade-up">

                        <div style={{ fontSize: "1.5rem" }} >
                          3rd Div
                        </div>
                      </div>



                    </div>
                  </div>
                </div>
              </div>




            </div>



          </div>











        </div>

        {/* skills completed  ---------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------  */}


        <div className=' '>

          <div className='projects-title'>
            <div className="h1 text-left mt-5 col2-text ">My Projects

              <hr className="hr hr-blurry" />
            </div>
          </div>








          <div className='row  projects-parent'>




            <div className='col project-card ' >
              <div className="card projects-cardImg  "  data-aos="fade-right">
                <img className="card-img-top img-fluid p-3 " src={todo} alt="...." onClick={()=>{
                  window.open('https://github.com/Mangleshkumar665')
                }} />
                <div className="card-body">
                  <h4>
                    Languages used
                  </h4>
                  <div>
                  <i className="fa-solid fa-code  mx-1"></i>

                    Html/Css
                  </div>

                  <div>
                  <i className="fa-brands fa-square-js mx-2"></i>
                    

                    Javascript
                  </div>
                  <div>
                  <i className="fa-brands fa-react m-1 "></i>
                    
                    react
                  </div>





                  <p className="card-text mt-1">To-do list is app that   lists your tasks that you have to do, or things that you want to do </p>
                </div>
              </div>

            </div>
            <div className='col'>
              <div className="card projects-cardImg" data-aos="fade-up">
                <img className="card-img-top img-fluid p-3 " src={calculator} alt="...." onClick={()=>{
                  window.open('https://github.com/Mangleshkumar665')
                }} />
                <div className="card-body">
                  <h4>
                    Languages used
                  </h4>
                  <div>
                  <i className="fa-solid fa-code  mx-1"></i>

                    Html/Css
                  </div>

                  <div>
                  <i className="fa-brands fa-square-js mx-2"></i>
                    

                    Javascript
                  </div>



                  <p className="card-text mt-1">A simple GUI Calculator which performs Basic maths  calculations </p>
                </div>
              </div>

            </div>

            <div className='col'>
              <div className="card projects-cardImg " data-aos="fade-up" >
                <img className="card-img-top img-fluid p-3 " src={typesq} alt="...." onClick={()=>{
                  window.open('https://github.com/Mangleshkumar665')
                }} />
                <div className="card-body">
                  <h4>
                    Languages used
                  </h4>
                  <div>
                  <i className="fa-solid fa-code  mx-2"></i>

                    Html/Css
                  </div>

                  <div>
                  <i className="fa-brands fa-square-js fa-lg mx-2"></i>


                    Javascript
                  </div>
                  <div>
                  <i className="fa-brands fa-react fa-lg mx-2"></i>

                    react
                  </div>



                  <p className="card-text mt-1">Type^2 is a Typing speed analyser thorugh which you can get your WPM and Correctness   </p>






                </div>
              </div>

            </div>

            <div className='col'>
              <div className="card projects-cardImg " data-aos="fade-left" >
                <img className="card-img-top img-fluid p-3 " src={quiz} alt="...." onClick={()=>{
                  window.open('https://github.com/Mangleshkumar665')
                }} />
                <div className="card-body">



                  <h4>
                    Languages used
                  </h4>
                  <div>
                  <i className="fa-solid fa-code  mx-1"></i>
                    Html/Css
                  </div>

                  <div>
                  <i className="fa-brands fa-square-js mx-2"></i>

                    Javascript
                  </div>
                  <div>
                  <i className="fa-brands fa-react mx-2"></i>
                    react
                  </div>
                  <p className="card-text mt-1">A Basic Vanilla Javascript Fronted Based Project </p>
                </div>
              </div>

            </div>



          </div>


        </div>




      </div>




    </div>
  )
}
