import React from 'react';


function About() {
    return(
        <section>
            <div className='center' id="about">
            <h1 className='page-header'>About me</h1>
            </div>
            <img
                src={require('../../assets/images/recent-photo.jpg')}
                alt="about me"
                className='photo'
                />
                <div>
                    <p>
                        I am about to receive a bootcamp certificate in full stack development from Southern Methodist University.
                        I am looking to build a more intuitive user experience on the web. I have newly developed skills in in JavaScrtipt, 
                        CSS, HTML, React.js, as well as others to achieve this goal. I am a good problem solver and a fast learner.
                    </p>
                </div>
        </section>
    );
}

export default About;