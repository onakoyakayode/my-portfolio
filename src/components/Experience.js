import React from "react";
import profileImage from "../images/suitGuy.png"
import CV from "../file/OnakoyaCv.pdf"


export default function Experience() {
    return (

        <div className="experience">
            <h5 className="qualification">Qualification</h5>
            <h2 className="experience-title">My Experience</h2>
            <div className="experience-container">
                <div className="hire-profile">
                    <img src={profileImage} className="profile-image" alt="profile"/>
                    <div className="hire-me">
                        <a href="mailto:onakoyakayode@gmail.com" target="_blank">
                            <button className="hire-me-button">Hire Me</button>
                        </a>
                        <a href={CV} target="_blank" rel="noopener norefferer" donwload>
                            <button className="donwload-me-button">Download CV</button>
                        </a>
                    </div>
                </div>
                <div className="vertical-line"></div>
                <div className="my-experience">
                    <div className="my-experience-roles role1">
                        <h4 className="role">Frontend Developer</h4>
                        <div className="the-sole-company">
                            <h4 className="my-experience-heading">The Sole Company</h4>
                            <p className="my-experience-date">Nov, 2021 - Till Date</p>
                        </div>
                        <ul className="my-experience-description">
                            <li>Responsive Web Layout</li>
                            <li>Mobile layout Priority Approach</li>
                            <li>HTML, CSS, JavaScript</li>
                            <li>JavaScript-Framework(ReactJS)</li>
                        </ul>
                    </div>
                    <div className="my-experience-roles role2">
                    <h4 className="role-1 role">Frontend Developer</h4>
                        <div className="the-sole-company">
                            <h4 className="my-experience-heading">The Sole Company</h4>
                            <p className="my-experience-date">Nov, 2021 - Till Date</p>
                        </div>
                        <ul className="my-experience-description">
                            <li>Responsive Web Layout</li>
                            <li>Mobile layout Priority Approach</li>
                            <li>HTML, CSS, JavaScript</li>
                            <li>JavaScript-Framework(ReactJS)</li>
                        </ul>
                    </div>
                    <div className="my-experience-roles role3">
                    <h4 className="role-2 role">Frontend Developer</h4>
                        <div className="the-sole-company">
                            <h4 className="my-experience-heading">The Sole Company</h4>
                            <p className="my-experience-date">Nov, 2021 - Till Date</p>
                        </div>
                        <ul className="my-experience-description">
                            <li>Responsive Web Layout</li>
                            <li>Mobile layout Priority Approach</li>
                            <li>HTML, CSS, JavaScript</li>
                            <li>JavaScript-Framework(ReactJS)</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}