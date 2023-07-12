import React from 'react'
import profileImage from '../images/music1.jpeg'
import sp from '../images/music-items/spotify-icon.svg'
import yt from '../images/music-items/youtube-round-color-icon.svg'
import sc from '../images/music-items/soundcloud-round-color-icon.svg'

import back1 from '../images/Music/1.jpg';
import back2 from '../images/Music/2.jpg';
import back3 from '../images/Music/3.jpg';



const MusicSkills = () => {
  return (
    <div style={{ backgroundColor: "#121212" }}>

      <div className='music-wrapper '>


        <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <img className="d-block w-100" src={back3} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={back2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={back1} alt="Third slide" />
            </div>


            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div className='img-overlay text-center'> <p>MANGLESH</p>
            <p className='display-4'> Electronic Music Producer</p>
          </div>
        </div>


      </div>

      <div className='icons-wrapper'>
        <ul className='d-flex ' >
          <li className='icon-one'>
            <img src={sp} alt="" className='music-icons ' />
          </li>
          <li className='icon-two'>
            <img src={sc} alt="" className='music-icons ' onClick={() => window.open('https://soundcloud.com/manglesh-kumar-343101298')} />
          </li>
          <li className='icon-three'>
            <img src={yt} alt="" className='music-icons ' />
          </li>
        </ul>



      </div>


      <div className='music-list-wrapper'>
        <div className='caption'>
          MY WORKS
        </div>
    <hr />
      </div>



    </div>
  )
}

export default MusicSkills
