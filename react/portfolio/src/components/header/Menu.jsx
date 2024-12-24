import React from 'react';

export default function Menu({ href, name, style, click }) {
    return (
        <a className={style} href={href} onClick={() => { click(name) }}>{name}</a>
    );
}

