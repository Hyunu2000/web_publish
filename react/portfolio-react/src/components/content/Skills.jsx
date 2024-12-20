import React, { useEffect, useState } from 'react';

export default function Skills() {
    const [skills, setSkills] = useState({
        codingSkills: [],
        tools: [],
        etc: []
    });

    useEffect(() => {
        fetch('/data/skills.json')
            .then(data => data.json())
            .then(jsonData => setSkills(jsonData))
            .catch(error => console.log(error));
    }, []);

    return (
        <section id="skill" className="section max-container">
            <h2 className="title">My Skills</h2>
            <p className="description">Skills & Attributes</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nobis beatae, aliquid ratione commodi nam ex voluptate rem
                eveniet cupiditate optio natus? Cum, harum eum sint id quod
                nulla adipisci. Sunt?</p>
            <div className="skills">
                {/* Coding Skills */}
                <article className="skills__coding">
                    <h3 className="skill__title">Coding Skills</h3>
                    <ul>
                        {skills.codingSkills.map((skill) => (
                            <li className="bar" key={skill.name}>
                                <div className="bar__metadata">
                                    <span>{skill.name}</span><span>{skill.usage}</span>
                                </div>
                                <div className="bar__bg">
                                    <div className="bar__value" style={{ width: skill.usage }}></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </article>

                {/* Tools */}
                <article className="skills__tools">
                    <h3 className="skill__title">Tools</h3>
                    <ul>
                        {skills.tools.map((tool, index) => (
                            <li key={index}>{tool}</li>
                        ))}
                    </ul>
                </article>

                {/* Etc */}
                <article className="skills__etc">
                    <h3 className="skill__title">Etc</h3>
                    <ul>
                        {skills.etc.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </article>
            </div>
        </section>
    );
}
