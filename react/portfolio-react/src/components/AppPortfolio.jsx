import React from 'react';
import './css/style.css';
import Header from './Header.jsx';
import HeaderLogo from './header/HeaderLogo.jsx';
import HeaderMenu from './header/HeaderMenu.jsx';
import Content from './Content.jsx';
import Home from './content/Home.jsx';
import About from './content/About.jsx';
import Skills from './content/Skills.jsx';
import Mywork from './content/Mywork.jsx';
import Testimonials from './content/Testimonials.jsx';
import Arrowup from './content/Arrowup.jsx';
import Footer from './Footer.jsx';
import Contact from './footer/Contact.jsx';

export default function AppPortfolio() {
    return (
        <>
            <Header>
                <HeaderLogo />
                <HeaderMenu />
            </Header>
            <Content>
                <Home />
                <About />
                <Skills />
                <Mywork />
                <Testimonials />
                <Arrowup />
            </Content>
            <Footer>
                <Contact />
            </Footer>
        </>
    );
}
