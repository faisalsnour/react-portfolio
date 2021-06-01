import "./style.css"
import React, { useState, useRef } from "react"
import emailjs from 'emailjs-com';


export default function Contact() {

    const [senderName, setName] = useState("")
    const [senderEmail, setEmail] = useState("")
    const [senderMessage, setMessage] = useState("")


    function handleChange(event) {
        event.preventDefault()
        const id = event.target.id
        const value = event.target.value

        if (id === "senderName") {
            setName(value)
        }
        else if (id === "senderEmail") {
            setEmail(value)
        }
        else if (id === "senderMessage") {
            setMessage(value)
        }

    }


    function sendEmail(event) {
        event.preventDefault();

        // const templateParams = {
        //     user_name: senderName,
        //     user_email: senderEmail,
        //     message: senderMessage
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
                    <div className="row">
                        <div className="mb-3">
                            <label for="senderName" className="form-label">Full Name</label>
                            <input type="text" name="user_name" className="form-control" id="senderName" onChange={handleChange} placeholder="Enter your full name" required />
                        </div>
                        <div className="mb-3">
                            <label for="senderEmail" className="form-label">Email address</label>
                            <input type="email" name="user_email" className="form-control" id="senderEmail" onChange={handleChange} placeholder="Enter your email address" required />
                        </div>
                        <div className="mb-3">
                            <label for="senderMessage" className="form-label">Message</label>
                            <textarea className="form-control" name="message" id="senderMessage" rows="6" onChange={handleChange} placeholder="Enter your message here" required ></textarea>
                        </div>
                        <div className="mb-3" style={{ textAlign: "center" }}>
                            <button type="submit" value="Send" name="submit" className="btn" id="btnSend" onclick={sendEmail}>Primary</button>
                        </div>
                    </div>
                </form>
                <div>
                    <p>Name: {senderName}, Email: {senderEmail}, Message: {senderMessage}</p>
                </div>
            </div>

        </>
    )
}