import React, { useState, useEffect, useRef } from 'react';

export default function HeaderMenu() {
    // 메뉴가 열렸는지 여부
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null); // 토글 버튼 참조 추가

    // 메뉴 토글 함수
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState); // 이전 상태 기반으로 변경
    };

    // 메뉴 항목 클릭 시 메뉴 닫기
    const handleMenuItemClick = () => {
        setIsMenuOpen(false);
    };

    // 메뉴 외부 클릭 시 메뉴 닫기
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
            setIsMenuOpen(false); // 메뉴 외부를 클릭하면 메뉴 닫기
        }
    };

    // 윈도우 크기 변경 감지 및 메뉴 상태 업데이트
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false); // 화면이 넓어지면 메뉴 닫기
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // 메뉴 외부 클릭 감지
    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <>
            <nav ref={menuRef}>
                <ul className={`header__menu ${isMenuOpen ? 'open' : ''}`}>
                    <li><a className="header__menu__item active" href="#home" onClick={handleMenuItemClick}>Home</a></li>
                    <li><a className="header__menu__item" href="#about" onClick={handleMenuItemClick}>About</a></li>
                    <li><a className="header__menu__item" href="#skill" onClick={handleMenuItemClick}>Skills</a></li>
                    <li><a className="header__menu__item" href="#work" onClick={handleMenuItemClick}>My work</a></li>
                    <li><a className="header__menu__item" href="#testimonial" onClick={handleMenuItemClick}>Testimonial</a></li>
                    <li><a className="header__menu__item" href="#contact" onClick={handleMenuItemClick}>Contact</a></li>
                </ul>
            </nav>
            <button
                ref={buttonRef} // 토글 버튼의 참조 추가
                id="menu_toggle"
                className="header__toggle"
                aria-label="navigation menu toggle"
                onClick={toggleMenu} // 토글 클릭 시 메뉴 상태 변경
            >
                <i className="fa-solid fa-bars"></i>
            </button>
        </>
    );
}
