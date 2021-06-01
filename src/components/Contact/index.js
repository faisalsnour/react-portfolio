import "./style.css"
import React, { useState, useRef } from "react"
import emailjs from 'emailjs-com';


export default function Contact() {

    const [senderName, setName] = useState("")


    function handleChange(event) {
        event.preventDefault()

        setName(event.target.value)


    }


    function sendEmail(event) {
        event.preventDefault();

        // const templateParams = {
        //     user_name: event.target.user_name,
        //     user_email: event.target.user_email,
        //     message: event.target.message,
        //     contact_number: parseInt(Math.random() * 10000)

        // };

        emailjs
            .sendForm("service_7wfzojs", "contact_form", event.target, "user_nOyVexTohkJUOhOVmUL5g"
            )
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });

    }

    // function sendEmail() {
    //     console.log(`name = ${senderName}, email =${senderEmail}, message =${senderMessage}`)
    // }

    return (
        <>
            <div className="container">
                <p id="contactMe" >SEND A MESSAGE</p>
                <div id="line" ></div>
                <form onSubmit={sendEmail}>
                    <input name="contact_number" type="hidden" value={parseInt(Math.random() * 10000)} />
                    <div className="row">
                        <div className="mb-3">
                            <label for="senderName" className="form-label">Full Name</label>
                            <input type="text" name="user_name" className="form-control" id="senderName" onChange={handleChange} placeholder="Enter your full name" required />
                        </div>
                        <div className="mb-3">
                            <label for="senderEmail" className="form-label">Email address</label>
                            <input type="email" name="user_email" className="form-control" id="senderEmail" placeholder="Enter your email address" required />
                        </div>
                        <div className="mb-3">
                            <label for="senderMessage" className="form-label">Message</label>
                            <textarea className="form-control" name="message" id="senderMessage" rows="6" placeholder="Enter your message here" required ></textarea>
                        </div>
                        <div className="mb-3" style={{ textAlign: "center" }}>
                            <button type="submit" value="Send" name="submit" className="btn" id="btnSend" onclick={sendEmail}>Primary</button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}