import aos from 'aos';
import React, { useEffect } from 'react'
import Form from './Form';



export default function Contact() {










    
    useEffect(() => {
        aos.init({duration:1000});
    }, [])

    return (
        <div className=' row'>


            <div className="display-4 text-center p-2    ">Get in Touch
            <hr className="hr hr-blurry  mx-5  " />
            
            </div>
            
            <div className='row  contact-parent2 '>


                <div className='col-4  d-flex flex-column align-items-center justify-content-center  m-4 contact-card ' data-aos="fade-right">
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
                                <i className="fa-solid fa-location-dot m-2 fa-2xl"></i>
                            </div>

                            <h5 className="card-title contact-cardtext">Gorakhpur ,Uttar Pradesh </h5>

                        </div>
                    </div>
                </div>




                <div className='col-6   w-50 water    '>
                    <div className='col-sm-12 col-sm-offset-4 my-3 w-75 contact-info '>
                        <div className=' '>

                            <Form/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
