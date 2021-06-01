import "./style.css"
import React, { useState, useRef } from "react"

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


    senderMessage = (event) => {
        event.preventDefault();

        const templateParams = {
            from_name: { senderName } + " (" + { senderEmail } + ")",
            to_name: "Faisal",
            message: { senderMessage }
        };

        // emailjs
        //     .send("gmail", "portfoliositecontact", templateParams, "template_48jjry4")
        //     .then(
        //         function (response) {
        //             toast.success("Your message has successfully sent!", {
        //                 position: toast.POSITION.BOTTOM_CENTER
        //             });
        //             console.log("SUCCESS!", response.status, response.text);
        //         },
        //         function (err) {
        //             toast.error("Your message was not able to be sent");
        //         }
        //     );
    }

    function sendEmail() {
        console.log(`name = ${senderName}, email =${senderEmail}, message =${senderMessage}`)
    }

    return (
        <>
            <div className="container">
                <p id="contactMe" >SEND A MESSAGE</p>
                <div id="line" ></div>
                <form>
                    <div className="row">
                        <div className="mb-3">
                            <label for="senderName" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="senderName" onChange={handleChange} placeholder="Enter your full name" required />
                        </div>
                        <div className="mb-3">
                            <label for="senderEmail" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="senderEmail" onChange={handleChange} placeholder="Enter your email address" required />
                        </div>
                        <div className="mb-3">
                            <label for="senderMessage" className="form-label">Message</label>
                            <textarea className="form-control" id="senderMessage" rows="6" onChange={handleChange} placeholder="Enter your message here" required ></textarea>
                        </div>
                        <div className="mb-3" style={{ textAlign: "center" }}>
                            <button type="submit" onSubmit={sendEmail} class="btn" id="btnSend">Primary</button>
                        </div>
                        <div>
                            <p>Name: {senderName}, Email: {senderEmail}, Message: {senderMessage}</p>
                        </div>
                    </div>
                </form>

            </div>

        </>
    )
}