import React from 'react';
import './list.css';

export default function List({id, title, active, setSelected}) {
    return (
        <li 
        className={active ? "list list-active" : "list"}
        onClick={() => setSelected(id)}
        >
            {title}
        </li>
    )
}
