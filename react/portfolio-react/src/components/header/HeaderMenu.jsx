import React from 'react';

export default function HeaderMenu() {
    return (
        <>
        <nav>
            <ul className="header__menu">
                <li><a className="header__menu__item active" href="#home">Home</a></li>
                <li><a className="header__menu__item" href="#about">About</a></li>
                <li><a className="header__menu__item" href="#skill">Skills</a></li>
                <li><a className="header__menu__item" href="#work">My work</a></li>
                <li><a className="header__menu__item" href="#testimonial">Testimonial</a></li>
                <li><a className="header__menu__item" href="#contact">Contact</a></li>
            </ul>
        </nav>
        <button id="menu_toggle" className="header__toggle" aria-label="navigation menu toggle">
            <i className="fa-solid fa-bars"></i>
        </button>
        </>
    );
}

// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function HeaderMenu() {
//     return (
//         <>
//             <nav>
//                 <ul className="header__menu">
//                     <li><Link className="header__menu__item active" to="/home">Home</Link></li>
//                     <li><Link className="header__menu__item" to="/about">About</Link></li>
//                     <li><Link className="header__menu__item" to="/skill">Skills</Link></li>
//                     <li><Link className="header__menu__item" to="/work">My work</Link></li>
//                     <li><Link className="header__menu__item" to="/testimonial">Testimonial</Link></li>
//                     <li><Link className="header__menu__item" to="/contact">Contact</Link></li>
//                 </ul>
//             </nav>
//             <button id="menu_toggle" className="header__toggle" aria-label="navigation menu toggle">
//                 <i className="fa-solid fa-bars"></i>
//             </button>
//         </>
//     );
// }
