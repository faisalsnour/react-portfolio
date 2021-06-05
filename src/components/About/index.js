import Resume from '../About/Resume.pdf'
import "./style.css"

export default function About({ refName }) {


    return (

        <div className="container" ref={refName} >
            <p id="recentProject" >ABOUT</p>
            <div id="lineAbout" ></div>
            <div id="content" className="card-body"  >
                <p style={{ display: "inline" }} >Faisal is a Front-end Developer and Certified Professional in
                Accessibility Core Competencies CPACC with experience in designing, developing,
                and testing websites and web-applications.
                He has BSc in Information Technology & Computing with practical knowledge in web accessibility to
                develop and implement responsive, modern, and accessible visual designs.
                He also has professional and post-graduate certifciates and recently graduated from the
                Coding Bootcamp at the University of Toronto. In September 2021, Faisal will begin Master of Art in Information Systems & Technology at York University.
                </p>
                <p>
                    <ul style={{ listStyle: "none", marginTop: "20px", marginBottom: "20px" }}>
                        <li> <i className="fas fa-square-full square"></i> University of Toronto Full Stack Coding Certificate</li>
                        <li> <i className="fas fa-square-full square"></i> York University IEP Bridging Program in System Analysis</li>
                        <li> <i className="fas fa-square-full square"></i> Certified Professional in Accessibility Core Competencies </li>
                        <li> <i className="fas fa-square-full square"></i> Adobe Certified Expert - Business Practitioner</li>
                        <li> <i className="fas fa-square-full square"></i> Immigration Practitioner Diploma</li>
                    </ul>
                </p>
                <p>Faisal has solid knowledge about HTML5, CSS, SASS, GIT, SQL, JavaSript, BootStrap, React JS,
                    Express.JS, RESTful API, Adobe Experience Manager, Agile Development, Jira, Adobe Photoshop, InVision and Sketch</p>
                <p>Download Resume <a id="pdfResume" href={Resume} download="FaisalNour-Resume"><i className="fas fa-download fa-2x" title="Download Resume" id="resumeDownload" name="resume"></i></a></p>
            </div>
        </div>

    )
}