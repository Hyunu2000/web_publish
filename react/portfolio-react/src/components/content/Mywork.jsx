import React, { useState, useEffect } from 'react';

export default function Mywork() {
    const [projects, setProjects] = useState([]);
    const [filterProjects, setFilterProjects] = useState([]);
    const [selectCategory, setSelectCategory] = useState('All');

    useEffect(() => {
        fetch('/data/mywork.json')
            .then(data => data.json())
            .then(jsonData => {
                setProjects(jsonData);
                setFilterProjects(jsonData);
            })
            .catch(error => console.log(error));
    }, []);
    

    const handleCategoryClick = (category) => {
        setSelectCategory(category);
        if (category === 'All') {
            setFilterProjects(projects);
        } else {
            setFilterProjects(projects.filter(project => project.category === category));
        }
    };

    return (
        <section id="work" className="section max-container">
            <h2 className="title">My work</h2>
            <p className="description">Projects</p>
            <ul className="categories">
                <li>
                    <button
                        className={`category ${selectCategory === 'All' ? 'category--selected' : ''}`}
                        onClick={() => handleCategoryClick('All')}
                    >
                        All<span className="category__count">{projects.length}</span>
                    </button>
                </li>
                <li>
                    <button
                        className={`category ${selectCategory === 'Front-end' ? 'category--selected' : ''}`}
                        onClick={() => handleCategoryClick('Front-end')}
                    >
                        Front-end<span className="category__count">{projects.filter(project => project.category === 'Front-end').length}</span>
                    </button>
                </li>
                <li>
                    <button
                        className={`category ${selectCategory === 'Back-end' ? 'category--selected' : ''}`}
                        onClick={() => handleCategoryClick('Back-end')}
                    >
                        Back-end<span className="category__count">{projects.filter(project => project.category === 'Back-end').length}</span>
                    </button>
                </li>
                <li>
                    <button
                        className={`category ${selectCategory === 'Mobile' ? 'category--selected' : ''}`}
                        onClick={() => handleCategoryClick('Mobile')}
                    >
                        Mobile<span className="category__count">{projects.filter(project => project.category === 'Mobile').length}</span>
                    </button>
                </li>
            </ul>
            <ul className="projects">
                {filterProjects.map(({ id, title, description, image }) => (
                    <li key={id} className="project">
                        <img className="project__img" src={image} alt={title} />
                        <div className="project__metadata">
                            <h3 className="project__metadata__title">{title}</h3>
                            <p>{description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
