import React from 'react';

export default function Menu({href, name}) {
    return (
        <a className="header__menu__item" href={href}>{name}</a>
    );
}

