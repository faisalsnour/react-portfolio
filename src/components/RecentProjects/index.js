
import Project from "../Project"
import "./style.css"
import GoldieMohrLtd from "../../components/RecentProjects/GoldieMohrLtd.png"
import LMS from "../../components/RecentProjects/LMS.png"
import PasswordGenerator from "../../components/RecentProjects/PasswordGenerator.png"
import TourismApp from "../../components/RecentProjects/TourismApp.png"
import WorkDayScheduler from "../../components/RecentProjects/WorkDayScheduler.png"

export default function RecentProject() {
    return (
        <>
            <div className="container">
                <div id="projects" className="row">
                    <Project image={GoldieMohrLtd} name="Goldie Mohr Ltd" deployed="https://goldie-mohr-full.herokuapp.com/" repository="https://github.com/GoldieMohrProject/goldie-mohr" description="The purpose of this project is to create a new and highly improved website for the company Goldie Mohr Ltd. The website contains home, services & projects, products, about us, careers and contact us pages. It also provide a login features and access to additional pages for registered employees" />

                </div>
            </div>
        </>
    )
}