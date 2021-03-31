import React from "react";
import "./style.css";

function Head(props) {
    return <div className="header">{props.children}</div>
}

export default Head;