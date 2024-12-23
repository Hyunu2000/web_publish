import React from 'react';

export default function Contact() {
    return (
        <footer id="contact" className="section">
            <h2 className="title">Let's talk</h2>
            <p className="description">hyunuhyunu@gmail.com</p>
            <ul className="contact__links">
                <li>
                    <a className="contact__link" href="http://github.com"><i className="fa-brands fa-github"></i></a>
                </li>
                <li>
                    <a className="contact__link" href="http://linkedin.com"><i className="fa-brands fa-linkedin"></i></a>
                </li>
            </ul>
            <p>Dream Software Engineer Hyunu - All right reserved</p>
        </footer>
    );
}

