import React from "react";
import "./style.css";


function Search(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <label for="name">Search: </label>
            <input type="text" name="name" id="name" onChange={props.handleChange}></input>
            
        </form>
    )
}

export default Search;