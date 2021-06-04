import "./style.css"
import React, { useState } from "react"




export default function Home({ moveTo }) {

    const [word, setWord] = useState("Know more")

    return (
        <>
            <div id="hero">
                <div id="knowMore" className="row">
                    <div className="col-7 col-xl-11">
                        <h2>Faisal Nour</h2>
                        <p>
                            A Front-end Developer and Certified Professional in Accessibility Core Competencies
                        </p>
                        <button to="/about" onClick={moveTo} id="btnKnowMore" type="button" className="btn btn-primary" onMouseLeave={() => { setWord("Know more") }} onMouseEnter={() => { setWord("Know more >") }}>{word}</button>
                    </div>
                </div>
            </div>
        </>
    )
}