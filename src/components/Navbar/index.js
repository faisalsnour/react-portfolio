
import { Link } from "react-router-dom"
import "./style.css"
import Logo from "../Navbar/Logo.png"

export default function Navbar({ moveToAbout, moveToProjects, moveToContact }) {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#FFFFFF" }}>
                <div className="container-fluid">
                    <Link to="/"><img id="logo" alt="FN logo" src={Logo} style={{ top: "2px", left: "2px", width: "40px", height: "40px" }} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav" dir="rtl">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a id="btnAbout" className="nav-link active coloredbutton" aria-current="page" href="#about" onClick={moveToAbout}>About</a>
                            </li>
                            <li className="nav-item">
                                <a id="btnProject" className="nav-link active coloredbutton" aria-current="page" href="#recentprojects" onClick={moveToProjects}>Projects</a>
                            </li>
                            <li className="nav-item">
                                <a id="btnContact" className="nav-link active coloredbutton" aria-current="page" href="#contact" onClick={moveToContact}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}