import React from "react";
import { BsTelephoneFill, BsGithub } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { ImLocation } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Reveal } from "react-reveal";
import profile from "../Assets/profile.jpeg";

function Home(props) {
    return (
        <div className="home-container" id="home">
            <Reveal top cascade>
                <div className="profile-container">
                    <div className="hello">
                        <h4>Hello I am</h4>
                    </div>
                    <h1>Lafferty Kevin AH THION</h1>
                    <h2>Sotware Engineer Student</h2>

                    <div className="contact-info">
                        <div className="contact-info-item">
                            <BsTelephoneFill />
                            {"  "}
                            <span className="phoneNumber">
                                +212 (0)6-51-359-560
                            </span>
                        </div>
                        <div className="contact-info-item">
                            <GrMail />
                            {"  "}
                            <span className="phoneNumber">
                                ahthionkevin@gmail.com
                            </span>
                        </div>
                        <div className="contact-info-item">
                            <ImLocation />
                            {"  "}
                            <span className="phoneNumber">
                                Hay Extension Tilila Rue Ajdigue Tikiouine
                                Agadir
                            </span>
                        </div>
                        <div className="social-network">
                            <div className="social-network-item">
                                <a
                                    href="https://github.com/ahthionkevin/"
                                    target={"_blank"}
                                >
                                    <BsGithub />
                                </a>
                            </div>
                            <div className="social-network-item">
                                <FaFacebook />
                            </div>
                            <div className="social-network-item">
                                <AiFillInstagram />
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
            <Reveal top cascade>
                <div className="profile-image-container">
                    <img
                        className="profile-image"
                        src={profile}
                        alt="my profile picture"
                        width="200px"
                        height="200px"
                    />
                </div>
            </Reveal>
        </div>
    );
}

export default Home;
