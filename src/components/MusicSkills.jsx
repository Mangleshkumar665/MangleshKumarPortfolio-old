import React from 'react'
import profileImage from '../images/music1.jpeg'
import sp from '../images/music-items/spotify-icon.svg'
import yt from '../images/music-items/youtube-round-color-icon.svg'
import sc from '../images/music-items/soundcloud-round-color-icon.svg'

const MusicSkills = () => {
  return (
    <>
      <div className='music-background-wrapper ' >

        <div className='music-background-caption-wrapper'> 
       <p className='music-background-caption'>Listen to Numb currently on  <button style={{all:"unset",color:"#ff5500"}} onClick={()=> window.open('https://soundcloud.com/manglesh-kumar-343101298')}> SoundCloud </button> Music  </p> 
        </div>
        

        <div className='music-background-name d-flex'>
          <div style={{color:"#ff5500"}} >Ma</div>
          <div style={{color:"white"}} >ngle</div>
          <div style={{color:"#1ed760"}} >sh</div>
          
          
        </div>

        <img src={profileImage}className='music-background-image' alt="profile"   />

        <div className=' '>
          <ul className='d-flex d icons-wrapper ' style={{listStyle:"none"}}>
            <li className='icon-one'>
              <img src={sp} alt="" className='music-icons ' />
            </li>
            <li className='icon-two'>
              <img src={sc} alt="" className='music-icons ' onClick={()=> window.open('https://soundcloud.com/manglesh-kumar-343101298')} />
            </li>
            <li className='icon-three'>
              <img src={yt} alt="" className='music-icons ' />
            </li>
          </ul>
        </div>


      </div>

      <div className='music-background-intro'>
        I'm a India based <strong>progressive house </strong>  music producer, Producing since 2020 , dedicated to creating beats that move your soul and take your body on a journey.
        </div>

        
    </>
  )
}

export default MusicSkills
