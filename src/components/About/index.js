import Resume from '../About/Resume.pdf'
import "./style.css"

export default function About() {
    return (
        <div id="content" class="card-body"  >
            <p style={{ display: "inline;" }} >Faisal is a Front-end Developer and Certified Professional in
            Accessibility Core Competencies CPACC with experience in designing, developing,
            and testing websites and web-applications.
            He has BSc in Information Technology & Computing with practical knowledge in web accessibility to
            develop and implement responsive, modern, and accessible visual designs.
            He also has professional and post-graduate certifciates and recently graduated from the
            Coding Bootcamp at the University of Toronto
                </p>
            <p>
                <ul style={{ listStyle: "none" }}>
                    <i class="fas fa-square-full square"></i><li style={{ display: "inline" }}>York University IEP Bridging Program in System Analysis</li>
                    <br />
                    <i class="fas fa-square-full square"></i><li style={{ display: "inline" }}>Immigration Practitioner Diploma</li>
                    <br />
                    <i class="fas fa-square-full square"></i><li style={{ display: "inline" }}>Certified Professional in Accessibility Core Competencies </li>
                    <br />
                    <i class="fas fa-square-full square"></i><li style={{ display: "inline" }}>Adobe Certified Expert - Business Practitioner</li>
                </ul>
            </p>
            <p>Faisal has solid knowledge about HTML5, CSS, SASS, GIT, SQL, JavaSript, BootStrap, React JS,
                    Express.JS, RESTful API, Adobe Experience Manager, Agile Development, Jira, Adobe Photoshop, InVision and Sketch</p>
            <p style={{ marginTop: "10px", marginLeft: "0px", fontWeight: "bold" }}><a id="pdfResume" href={Resume} download="FaisalNour-Resume">Download resume</a></p>

        </div>

    )
}