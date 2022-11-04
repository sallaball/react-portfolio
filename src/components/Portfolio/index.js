import React from 'react';
import Project from '../Project';

function Portfolio() {
    const projects = [
        {
            name: 'Crypto Tunnel',
            description:
            'A website designed to track your crypto currency wallet.',
            image: 'CryptoTunnel.png',
            technologies: [
                'HTML/CSS',
                'JavaScript',
                'Tailwind CSS',
                'CoinGecko and Gnews.io APIs'
            ],
            github: 'https://github.com/sallaball/crypto_tunnel',
            deployed: 'https://davidkd5.github.io/crypto_tunnel/',
        },
        {
            name: 'Liquorlicious',
            description:
            'Search your favorite drink recipes or look for recipes based on an ingredient you searched.',
            image: 'liquorlicious-screenshot.png',
            technologies: [
                'git',
                'React',
                'Apollo Server',
                'GraphQL',
                'React router',
                'bcrypt',
                'oncurrently',
                'jsonwebtoken',
                'jwt decode',
                '@apollo/client'
            ],
            github: 'https://github.com/sallaball/liquorlicious',
            deployed: 'https://immense-lowlands-27083.herokuapp.com/',
        },

        {
            name: 'Work Day Scheduler',
            description:
            'A calendar to keep up with your busy work schedule',
            image: 'WorkDayScheduler.png',
            technologies: [
                'HTML',
                'CSS',
                'JavaScript',
            ],
            github: 'https://github.com/sallaball/Work-Day-Scheduler',
            deployed: 'https://sallaball.github.io/Work-Day-Scheduler/',
        },
        {
            name: 'Note Taker',
            description:
            'Keep your notes and tasks organized with this app',
            image: 'NoteTaker.png',
            technologies: [
                'HTML',
                'CSS',
                'JavaScript',
            ],
            github: 'https://github.com/sallaball/Note-Taker',
            deployed: 'https://note-takersb.herokuapp.com/',
        },
        {
            name: 'Employee Tracker',
            description:
            'This backend app easily keeps track of your employees with this app. Add, remove, and edit employee info.',
            image: 'EmployeeTracker.png',
            technologies: [
                'JavaScript',
                'Node.js',
                'npm',
                'MySQL',
                'Inquirer',
            ],
            github: 'https://github.com/sallaball/Employee-Tracker',
            deployed: 'https://github.com/sallaball/Employee-Tracker',
        },
        {
            name: 'Code Quiz',
            description:
            'A quiz to test your knowledge on coding.',
            image: 'CodingQuiz.png',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            github: 'https://github.com/sallaball/Code-Quiz',
            deployed: 'https://sallaball.github.io/Code-Quiz/',
        },
        {
            name: 'E-Commerce Backend',
            description:
            'A mysql database and application backend for an e-commerce site. Built using MySQL2, Express, Sequelize and dotenv.',
            image: 'ECommerce.png',
            technologies: [
                'JavaScript',
                'express',
                'Sequelize',
                'MySQL',
                'dotenv'
            ],
            github: 'https://github.com/sallaball/e-commerce-back-end',
            deployed: 'https://github.com/sallaball/e-commerce-back-end',
        },
    ];

    return (
        <section>
            <div className='center'>
                <h1 className='page-header'>My Portfolio</h1>
            </div>
            <div>
                <ul className='flex-row mobile-row'>
                    <li className='padding'>
                        <Project projects={projects[0]}></Project>
                    </li>
                    <li className='padding'>
                        <Project projects={projects[1]}></Project>
                    </li>
                </ul>
                <ul className='flex-row mobile-row'>
                    <li className='padding'>
                        <Project projects={projects[2]}></Project>
                    </li>
                    <li className='padding'>
                        <Project projects={projects[3]}></Project>
                    </li>
                </ul>
                <ul className='flex-row mobile-row'>
                    <li className='padding'>
                        <Project projects={projects[4]}></Project>
                    </li>
                    <li className='padding'>
                        <Project projects={projects[5]}></Project>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Portfolio;
