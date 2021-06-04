import "./style.css"
import React, { useState, useRef } from "react"
import emailjs from 'emailjs-com';
import Modal from "../Modal"


export default function Contact({ refName }) {

    const [senderName, setName] = useState("")
    const [senderEmail, setEmail] = useState("")
    const [senderMessage, setMessage] = useState("")
    const [show, setShow] = useState(false)

    function showModal() {
        setShow(true)
    }

    function hideModal() {
        setShow(false)
    }

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

        emailjs
            .sendForm("service_7wfzojs", "contact_form", event.target, "user_nOyVexTohkJUOhOVmUL5g"
            )
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });

        showModal()

        setName("")

        setEmail("")

        setMessage("")

    }


    return (
        <>
            <div className="container" ref={refName}>
                <Modal show={show} handleClose={hideModal}>
                    <p>Your message has been sent successfully </p>
                </Modal>
                <p id="contactMe" >SEND A MESSAGE</p>
                <div id="line" ></div>
                <form onSubmit={sendEmail}>
                    <input name="contact_number" type="hidden" value={parseInt(Math.random() * 10000)} />
                    <div className="row">
                        <div className="mb-3">
                            <label for="senderName" className="form-label">Full Name</label>
                            <input type="text" name="user_name" value={senderName} style={{ borderRadius: "0px" }} className="form-control" id="senderName" onChange={handleChange} placeholder="Enter your full name" required />
                        </div>
                        <div className="mb-3">
                            <label for="senderEmail" className="form-label">Email address</label>
                            <input type="email" name="user_email" value={senderEmail} style={{ borderRadius: "0px" }} className="form-control br-0" id="senderEmail" onChange={handleChange} placeholder="Enter your email address" required />
                        </div>
                        <div className="mb-3">
                            <label for="senderMessage" className="form-label">Message</label>
                            <textarea className="form-control" name="message" value={senderMessage} style={{ borderRadius: "0px" }} id="senderMessage" rows="6" onChange={handleChange} placeholder="Enter your message here" required ></textarea>
                        </div>
                        <div className="mb-3" style={{ textAlign: "center" }}>
                            <button type="submit" value="Send" name="submit" className="btn" id="btnSend" onclick={sendEmail}>Send</button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}