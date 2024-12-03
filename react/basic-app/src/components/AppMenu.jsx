import Menu from "./Menu.jsx";
import MenuList from "./MenuList.jsx";

export default function AppMenu() {
    const nameList = [
        {"name": "Home", "href": "#home", "bg": "red", "color": "white"},
        {"name": "About", "href": "#about", "bg": "orange"},
        {"name": "Skills", "href": "#skills", "bg": "yellow"},
        {"name": "Mywork" ,"href": "#mywork", "bg": "green"},
        {"name": "Testimonial", "href": "#testimonial", "bg": "blue"},
        {"name": "Contact", "href": "#contact", "bg": "navy"},
        {"name": "Support", "href": "#support", "bg": "purple"},
    ];

    return (
        <>
            <div>
                <Menu name="Home" href="#home" bg="purple" color="white"/>
                <Menu name="About" href="#about" bg="navy"/>
                <Menu name="Skills" href="#skills" bg="blue"/>
                <Menu name="Mywork" href="#mywork" bg="green"/>
                <Menu name="Testimonial" href="#testimonial" bg="yellow"/>
                <Menu name="Contact" href="#contact" bg="orange"/>
                <Menu name="Support" href="#support" bg="red"/>
            </div>
            <div>
                <MenuList list={nameList}/>
            </div>
        </>
    );
}