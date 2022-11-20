import Aos from 'aos';
import React, { useEffect } from 'react'



export default function Contact() {

    useEffect(() => {
        Aos.init({duration:1000});
    }, [])

    return (
        <div className=' row'>


            <div className="display-4 text-center p-2    ">Get in Touch
            <hr className="hr hr-blurry  mx-5  " />
            
            </div>
            
            <div className='row  contact-parent2 '>


                <div className='col-4  d-flex flex-column align-items-center justify-content-center  m-4 contact-card ' data-Aos="fade-right">
                    <div className="card w-75 contact-cardparent">
                        <div className="card-body d-flex flex-row flex-wrap  contact-cards">
                            <div className="flex-shrink-0">
                                <i className="fa-brands fa-whatsapp m-2 fa-2xl"></i>
                            </div>
                            <h5 className="  contact-cardtext">+91 7703004000</h5>

                        </div>
                    </div>

                    <div className="card w-75 mt-4 contact-cardparent " onClick={()=>{
                                    window.open('https://www.instagram.com/ghostmak_rov/')
                                }} >
                        <div className="card-body d-flex flex-row flex-wrap  contact-cards" >
                            <div className="flex-shrink-0">
                                <i className="fa-brands fa-instagram m-2 fa-2xl"></i>

                            </div>

                            <h5 className="card-title contact-cardtext">Instagram</h5>

                        </div>
                    </div>

                    <div className="card w-75 mt-4 contact-cardparent contact-cardparent ">
                        <div className="card-body d-flex flex-row flex-wrap  contact-cards">
                            <div className="flex-shrink-0">
                                <i class="fa-solid fa-location-dot m-2 fa-2xl"></i>
                            </div>

                            <h5 className="card-title contact-cardtext">Gorakhpur ,Uttar Pradesh </h5>

                        </div>
                    </div>
                </div>




                <div className='col-6   w-50 water    '>
                    <div className='col-sm-12 col-sm-offset-4 my-3 w-75 contact-info '>
                        <div className=' '>

                            <form >
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label h5 contact-info ">Name</label>
                                    <input type="text" className="form-control contact-info" />

                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label h5 contact-info" >E-mail</label>
                                    <input type="email" className="form-control contact-info" />

                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label h5 contact-info">Number</label>
                                    <input type="text" className="form-control contact-info" />

                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label h5 contact-info "> Write Your Message here  </label>
                                    <textarea className="form-control contact-info" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>


                                <button type="submit" className="btn  h5 knowMore border  " >Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
