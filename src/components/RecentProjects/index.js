
import Project from "../Project"
import "./style.css"
import GoldieMohrLtd from "../../components/RecentProjects/GoldieMohrLtd.png"
import LMS from "../../components/RecentProjects/LMS.png"
import PasswordGenerator from "../../components/RecentProjects/PasswordGenerator.png"
import TourismApp from "../../components/RecentProjects/TourismApp.png"
import WorkDayScheduler from "../../components/RecentProjects/WorkDayScheduler.png"
import BurgerLogger from "../../components/RecentProjects/BurgerLogger.png"
import TheShoppies from "../../components/RecentProjects/TheShoppies.png"


export default function RecentProject() {
    return (
        <>
            <div className="container">
                <p id="recentProject" >RECENT PROJECTS</p>
                <div id="line" ></div>
                <div id="projects" className="row">
                    <Project image={GoldieMohrLtd} name="Goldie Mohr Ltd" deployed="https://goldie-mohr-full.herokuapp.com/" repository="https://github.com/GoldieMohrProject/goldie-mohr" description="The purpose of this project is to create a new and highly improved website for the company Goldie Mohr Ltd. The website contains home, services & projects, products, about us, careers and contact us pages. It also provide a login features and access to additional pages for registered employees" />
                    <Project image={TheShoppies} name="The Shoppies" deployed="https://theshoppies-faisal.herokuapp.com/" repository="https://github.com/faisalsnour/movieSearch" description="This single-page web application allows user to search for movies and nominate them accordingly. Users are able to have their nominated movies saved in their web broswers so they can see them saved when they visit the website again. They are only allowed to nominate up to five movies. A banner will be displayed when five movies are nominated. The application uses OMDB's API to obtain information about movies.

" />
                    <Project image={TourismApp} name="Tourism Application" deployed="https://faisalsnour.github.io/Tourism-App/" repository="https://github.com/faisalsnour/Tourism-App" description="The purpose of this project is to build a web application that allows travellers to search for cities around the world and find useful information so they plan their trips accordingly. For each searched city, the application shows the date, current weather, 5-days weather forecast, local currency of the searched city against Canadian Dollar, popular destination, and google map" />
                    <Project image={LMS} name="Library Management System" deployed="https://library-management-system-lms.herokuapp.com/" repository="https://github.com/faisalsnour/library-management-system" description="To build a management system that helps in handling the primary functions of libraries like maintaining the database for entering new books, tracking books that have been borrowed by members and storing members data in secure database

" />
                    <Project image={PasswordGenerator} name="Password Generator" deployed="https://faisalsnour.github.io/PasswordGenerator/" repository="https://github.com/faisalsnour/PasswordGenerator" description="The application generates complex passwords for users between 8 to 128 characters based on four criterias; Uppercase letters, Lowercase letters, Numbers, and Special characters. It verifies and validates user's entry before generating a password, whether the length of password meet the minimum or maximum limit, it also validates that at least one of the four criterias has been selected before processing" />
                    <Project image={WorkDayScheduler} name="Work Day Scheduler" deployed="https://faisalsnour.github.io/WorkDayScheduler/" repository="https://github.com/faisalsnour/WorkDayScheduler" description="The idea of this project is to build a simple event scheduler for users where they can enter events during their working hours which is typically between 9:00 AM to 5:00 PM. Users events are saved in local storages so even when users close the application, they will find their information once they come back

" />
                    <Project image={BurgerLogger} name="Burger Logger" deployed="https://faisal-burgerlog.herokuapp.com/" repository="https://github.com/faisalsnour/BurgerLogger" description="To create a burger logger using MySQL, Node, Express, Handlebars, ORM and Heroku to deploye the application. The application allows users to enter burger names into the database, validates user's entry to ensure a burger name is entered and displays the entered burger on the left side of the page, waiting to be devoured. Once the user clicks the devour button, the burger will move to the right side of the page

" />



                </div>
            </div>
        </>
    )
}