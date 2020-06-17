import React from 'react'
import './style/Food.css'

const food = (props) => {
    
    return (
        <div className="recipe">
            <h1>{props.title}</h1>
            <p>kalorie: {props.calories}</p>
            <img src={props.image} alt={props.title}></img>
            <ol>
                {props.ingredients.map(item => (
                    <li>{item.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default food