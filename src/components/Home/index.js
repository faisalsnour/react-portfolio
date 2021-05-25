import "./style.css"
import React, { useState } from "react"
import { Link } from "react-router-dom";

export default function Home() {

    const [word, setWord] = useState("Know more")

    return (
        <>
            <div id="hero">
                <div id="knowMore" className="row">
                    <div className="col-7 col-xl-11">
                        <h2>Faisal Nour</h2>
                        <p>A Front-end Developer and Certified Professional in Accessibility Core Competencies</p>
                        <Link to="/about" id="btnKnowMore" type="button" className="btn btn-primary" onMouseLeave={() => { setWord("Know more") }} onMouseEnter={() => { setWord("Know more >") }}>{word}</Link>
                    </div>
                </div>
            </div>
        </>
    )
}