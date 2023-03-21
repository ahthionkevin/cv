import React, { useRef, useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { ImLocation } from "react-icons/im";
import emailjs from "@emailjs/browser";
import validator from "validator";

function Contact(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("SUBMIT");
        if (firstName && lastName && message && validator.isEmail(email)) {
            emailjs
                .sendForm(
                    "service_2d89jfi",
                    "template_85y5v5v",
                    form.current,
                    "user_HjM93szme7PIRlCtS6GiG"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        } else {
            console.log("Email Not Sent");
        }
    };

    return (
        <div className="contact-container" id="contact">
            <div className="title">
                <h3>Contact Me</h3>
            </div>

            <div className="info-container">
                <div className="info-item">
                    <div className="circle">
                        <BsTelephoneFill className="icon" />
                    </div>
                    <h4>Phone Number</h4>
                    <p className="phoneNumber">+33 (0)7-51-092-150</p>
                </div>
                <div className="info-item">
                    <div className="circle">
                        <ImLocation className="icon" />
                    </div>
                    <h4>Address</h4>
                    <p className="phoneNumber">
                        8 10 Boulevard Victor Beaussier - 49000 - Angers - France
                    </p>
                </div>
                <div className="info-item">
                    <div className="circle">
                        <GrMail className="icon" />
                    </div>
                    <h4>Email</h4>
                    <p className="phoneNumber">ahthionkevin@gmail.com</p>
                </div>
            </div>
            <form
                ref={form}
                className="form-container"
                onSubmit={async (e) => {
                    await handleSubmit(e);
                    setEmail("");
                    setFirstName("");
                    setLastName("");
                    setMessage("");
                }}
            >
                <input
                    className="firstName"
                    type="text"
                    placeholder="First Name"
                    onInput={(e) => setFirstName(e.target.value)}
                    name="from_name"
                    value={firstName}
                />
                <input
                    className="lastName"
                    type="text"
                    placeholder="Last Name"
                    onInput={(e) => setLastName(e.target.value)}
                    name="from_surname"
                    value={lastName}
                />
                <input
                    className="email"
                    type="email"
                    placeholder="Mail Address"
                    onInput={(e) => setEmail(e.target.value)}
                    name="from_email"
                    value={email}
                />
                <textarea
                    className="message"
                    placeholder="Message"
                    onInput={(e) => setMessage(e.target.value)}
                    name="message"
                    value={message}
                />
                <input className="submit" type="submit" value={"Envoyer"} />
            </form>
        </div>
    );
}

export default Contact;
