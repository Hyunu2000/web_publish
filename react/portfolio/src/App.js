import './css/style.css';
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';
import Logo from './components/header/Logo.jsx';
import MenuList from './components/header/MenuList.jsx';
import ToggleButton from './components/header/ToggleButton.jsx';
import Home from './components/content/Home.jsx';
import SectionWrap from './components/content/SectionWrap.jsx';
import Majors from './components/content/Majors.jsx';
import Jobs from './components/content/Jobs.jsx';
import Skills from './components/content/Skills.jsx';
import Coding from './components/content/Coding.jsx';
import Article from './components/content/Article.jsx';
import Categories from './components/content/Categories.jsx';
import Projects from './components/content/Projects.jsx';
import Testimonials from './components/content/Testimonials.jsx';
import Arrow from './components/content/Arrow.jsx';
import Top from './components/footer/Top.jsx';
import ContactLinks from './components/footer/ContactLinks.jsx';
import Bottom from './components/footer/Bottom.jsx';



export default function App() {
  return (
    <>
      <Header>
        <Logo img="images/aaa.ico" name="Hyunu" />
        <MenuList />
        <ToggleButton />
      </Header>
      <Content>
        <Home img="images/aaa.png" name="Hyunu" />
        <SectionWrap id="about" title="About me" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nobis beatae, aliquid ratione commodi nam ex voluptate remeveniet cupiditate optio natus? Cum, harum eum sint id quodnulla adipisci. Sunt?">
          <Majors />
          <Jobs />
        </SectionWrap>
        <SectionWrap id="skill" title="My Skills" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nobis beatae, aliquid ratione commodi nam ex voluptate remeveniet cupiditate optio natus? Cum, harum eum sint id quodnulla adipisci. Sunt?">
          <Skills>
            <Coding />
            <Article type="Tools" />
            <Article type="Etc" />
          </Skills>
        </SectionWrap>
        <SectionWrap id="work" title="Mywork" description="Projects">
          <Categories />
          <Projects />
        </SectionWrap>
        <SectionWrap id="testimonial" title="Testimonial" description="See what they say about me">
          <Testimonials />
          <Arrow />
        </SectionWrap>
      </Content>
      <Footer>
        <Top title="Let's talk" description="hyunuhyunu@gmail.com"/>
        <ContactLinks />
        <Bottom />
      </Footer>
    </>
  );
}

