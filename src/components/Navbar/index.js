
import { Link, uselocation } from "react-router-dom"
import "./style.css"
import Logo from "../Navbar/Logo.png"

export default function Navbar({ moveToAbout, moveToProjects, moveToContact }) {
    // const location = uselocation();

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#FFFFFF;" }}>
                <div className="container-fluid">
                    {/* <Link to="/"><img id="logo" alt="FN logo" src={Logo} style={{ top: "2px", left: "2px", width: "40px", height: "40px" }} /></Link> */}
                    <Link to="/"><img id="logo" alt="FN logo" src={Logo} style={{ top: "2px", left: "2px", width: "40px", height: "40px" }} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav" dir="rtl">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a id="btnAbout" class="nav-link active coloredbutton" aria-current="page" href="#about" onClick={moveToAbout}>About</a>

                                {/* <Link to="/recentprojects" className={location.pathname === "/recentprojects" ? "nav-link active" : "nav-link"}>
                                    <span className="navbarStyle">Recent Projects</span>
                                </Link> */}
                            </li>
                            <li className="nav-item">
                                <a id="btnProject" class="nav-link active coloredbutton" aria-current="page" href="#recentprojects" onClick={moveToProjects}>Projects</a>
                            </li>
                            <li className="nav-item">
                                <a id="btnContact" class="nav-link active coloredbutton" aria-current="page" href="#contact" onClick={moveToContact}>Contact</a>
                            </li>
                            {/* <li className="nav-item">
                                <a to="/about" style={{ color: "#3078c6", fontWeight: "bold" }} className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                                    <span className="navbarStyle">About</span>
                                </a>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link to="/" style={{ color: "#3078c6", fontWeight: "bold" }} className={location.pathname === "/home" ? "nav-link active" : "nav-link"}>
                                    <span className="navbarStyle">Home</span>
                                </Link> */}
                            {/* </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            {/* </nav> <!--end of navbar--> */}
        </>
    )
}