import React from 'react';
import './list.css';

export default function List({title}) {
    return (
        <li className="list">
            {title}
        </li>
    )
}
