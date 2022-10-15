import React from 'react';

function Footer() {
    return (
        <footer className='footer'>
            <div>
                <a
                href="http://github.com/Sallaball"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <img
                    src={require("../../assets/logos/github-logo.png")}
                    alt="Github"
                    className="logo"
                    ></img>
                </a>
                <div>
                    <a
                    href='https://www.linkedin.com/in/salla-ball-7ab057b3?trk=profile-badge'
                    target="_blank"
                    rel="noopener norefferer"
                    >
                        <img
                        src={require("../../assets/logos/linkedin-logo.png")}
                        alt="LinkedIn"
                        className='logo'
                    ></img>
                    </a>
                <div>
                    <a
                    href='http://twitter.com/salla_ball'
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <img
                        src={require("../../assets/logos/twitter-logo.png")}
                        alt="Twitter"
                        className='logo'
                        ></img>
                        </a>
                </div>
               
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;