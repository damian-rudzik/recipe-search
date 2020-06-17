import React from 'react'
import './style/Form.css';

const form = (props) => {
    return (
        <form onSubmit={props.searchFood}>
            <input type="text" onChange={props.onChange} value={props.value}></input>
            <input type="submit" value="Szukaj!" />
        </form>
    )
}

export default form