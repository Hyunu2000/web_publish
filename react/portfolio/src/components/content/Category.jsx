import React from 'react';

export default function Category({name, count}) {
    return (
        <button className="category">{name}<span className="category__count">{count}</span></button>
    );
}


