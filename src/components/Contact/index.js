import "./style.css"
import React, { useState, useRef } from "react"

export default function Contact() {

    const [name, setName] = useState("")
    const [senderEmail, setEmail] = useState("")
    const [message, setMessage] = useState("")

    return (
        <>
            <div className="container">
                <p id="contactMe" >SEND A MESSAGE</p>
                <div id="line" ></div>
                <div className="row">
                    <div className="mb-3">
                        <label for="nameControlInput" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="nameControlInput" placeholder="Enter your full name" />
                    </div>
                    <div className="mb-3">
                        <label for="emailControlInput" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="emailControlInput" placeholder="Enter your email address" />
                    </div>
                    <div className="mb-3">
                        <label for="messageControlInput" className="form-label">Message</label>
                        <textarea className="form-control" id="messageControlInput" rows="6" placeholder="Enter your message here"></textarea>
                    </div>
                    <div className="mb-3" style={{ textAlign: "center" }}>
                        <button type="button" class="btn" id="btnSend">Primary</button>
                    </div>
                </div>

            </div>

        </>
    )
}