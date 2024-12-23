import React from 'react';

export default function Home() {
    return (
        <section id="home">
            <img className="home__avatar" 
                    src="https://eposu.com/wp-content/uploads/2024/09/Universe-Depicted-Sengai-71419.png"
                    alt="portfolio"/>
            <h2 className="home__title">Hello <br/> I'm
                <strong className="home__title--strong"> Dream Coder</strong>, Hyunu
            </h2>
            <p className="home__description">A software engineer currently residing in Suwon, South Korea</p>
            <a className="home__contact" href="#contact">Contact Me</a>
        </section>
    );
}

