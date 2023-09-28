import React from 'react'
import "./style.css"
import { CONSTANTS } from '../../../shared/Constants'

const ENUM = {
    about_image_url: "https://freepngimg.com/thumb/shoes/28530-3-nike-shoes-transparent.png",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.`
}

const AboutUs = () => {
    return (
        <>
            <section id="contact" className="row bg-dark w-100 p-0 m-0 rounded-top pt-5 pb-2">

                <div className="col-12 col-md-4 col-lg-4 col-xl-4 col-sm-4">
                    <img src={ENUM.about_image_url} className="img-fluid" />
                </div>
                <div className="col-12 col-md-4 col-lg-4 col-xl-4 col-sm-4 text-white">
                    <h3>{CONSTANTS.ABOUT_US}</h3>
                    <p className="bg-white rounded get-touch-border"></p>
                    <p className="text-secondary">{ENUM.desc}</p>
                    <div className=" w-100 m-0 h5 d-flex gap-2 py-3  ">
                        <a href="https://snipbyte.com">
                            <i className="p-1 text-dark rounded-circle bg-secondary  me-3 fa-brands fa-facebook"></i></a>
                        <a href="https://snipbyte.com">
                            <i className="p-1 text-dark rounded-circle bg-secondary  me-3  fa-brands fa-instagram " ></i></a>
                        <a href=" https://snipbyte.com">
                            <i className="p-1 text-dark rounded-circle bg-secondary  me-3  fa-brands fa-twitter" ></i>
                        </a>
                        <a href=" https://snipbyte.com">
                            <i className="p-1 text-dark rounded-circle bg-secondary  fa-brands fa-whatsapp" ></i></a>
                    </div>

                </div>
                <div className="col-12 col-md-4 col-lg-4 col-xl-4 col-sm-4 text-secondary ps-md-5 flex-column">
                    <div>

                        <h3 className="text-white">Get in Touch</h3>
                        <p className="bg-white rounded get-touch-border" ></p>

                        <div className=" h6 mb-3">
                            <i className="fas fa-user rounded me-3"></i>
                            John Doe
                        </div>
                        <div className=" h6 mb-3">
                            <i className="fas fa-map-marker-alt rounded me-3"></i>
                            Lorem Ipsum, Pakistan
                        </div>
                        <div className=" h6 mb-3">
                            <i className="fas fa-envelope rounded me-3"></i>
                            loremipsum@gmail.com
                        </div>
                        <div className=" h6 mb-5">
                            <i className="fas fa-globe rounded me-3"></i>
                            www.loremipsum.com
                        </div>
                    </div>
                    <div className="h-50 text-secondary">
                        <h3 className="text-white">Useful links</h3>
                        <p className="bg-white rounded get-touch-border" ></p>
                        <ul className="list-unstyled">
                            <li>About us</li>
                            <li>Lorem Ipsum</li>
                            <li>Contact Us</li>
                            <li>About us</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs