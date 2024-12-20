import React, { useState, useEffect } from 'react';

export default function About() {
    const [aboutMe, setAboutMe] = useState({
        major: [],
        job: []
    });

    useEffect(() => {
        fetch('/data/about.json')
            .then(data => data.json())
            .then(jsonData => setAboutMe(jsonData))
            .catch(error => console.log(error))
    }, []);

    return (
        <section id="about" className="section max-container">
            <h2 className="title">About me</h2>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Iure natus, temporibus perspiciatis repudiandae nostrum modi
                doloremque expedita non eius ipsum! Beatae porro adipisci
                omnis architecto dignissimos. Iusto ipsa inventore adipisci.</p>

            {/* Major Skills Section */}
            <ul className="majors">
                {aboutMe.major.map((major, index) => (
                    <li className="major" key={index}>
                        <i className={`major__icon fa ${major.title === "Front-end" ? "fa-html5" : major.title === "Mobile" ? "fa-mobile" : "fa-server"}`}></i>
                        <p className="major__title">{major.title}</p>
                        <p>{major.majorTitle}</p>
                    </li>
                ))}
            </ul>

            {/* Job Experience Section */}
            <ul className="jobs">
                {aboutMe.job.map((job, index) => (
                    <li className="job" key={index}>
                        <img src={job.img} alt={job.companyName} />
                        <div>
                            <p className="job__name">{job.companyName} as Software Engineer</p>
                            <p className="job__period">{job.jobPeriod}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}