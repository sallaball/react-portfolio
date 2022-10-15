import React from 'react';

function Resume() {
    return (
        <section>
            <div className='center'>
                <h1 className='page-header'>My Resume</h1>
            </div>
            <div className='bottom-spacing'>
                <a href={require("../../assets/files/Salla-Resume.pdf")} download>
                    <h4>Download my Resume</h4>
                </a>
            </div>
            <div>
                <h5>Front-End Proficiencies</h5>
                <ol>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                    <li>Responsive design</li>
                </ol>
                <br></br>
                <h5>Back-End Profieciencies</h5>
                <ol>
                    <li>APIs</li>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>MVC</li>
                </ol>
                <br></br>
                <h5>Dev Tool Proficiencies</h5>
                <ol>
                    <li>Git</li>
                    <li>npm</li>
                    <li>Jest</li>
                </ol>
                <br></br>
                <h5>Database Proficiencies</h5>
                <ol>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>NoSQL</li>
                </ol>
                </div>
        </section>
    );
}

export default Resume;