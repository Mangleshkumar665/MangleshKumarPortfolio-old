import React from 'react'

export default function Navbar() {

  const handleAboutBtn = () => {
    window.scrollTo({
      top:900,behavior:'smooth',
    });
  }

  const handleContactBtn = () => {
    window.scrollTo({
      top:5000,behavior:'smooth',
    });
  }
  const handleHomeBtn = () => {    
    window.scrollTo({
      top:0,behavior:'smooth',
    });
  }



  return (

    <div className='cardClass sticky-top navbar-body  '>
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid">
          <div onClick={handleHomeBtn} className="navbar-brand text-dark " >Manglesh</div>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div onClick={handleHomeBtn} className="nav-link active text-dark"  >Home</div>

              </li>
              <li className="nav-item">
                <div onClick={handleAboutBtn} className="nav-link active text-dark"  >About</div>
              </li>


              <li className="nav-item">
                <div onClick={handleContactBtn} className="nav-link active text-dark" >Contacts</div>
              </li>
            </ul>


          </div>
        </div>
      </nav>






      
    </div>
  )
}
