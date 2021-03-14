import React from "react";
import "./style.css";

function EmployeeRow(props) {
    return (
        <div class="container">
            <div class="row">
                <div class="col">{props.name}</div>
                <div class="col" >{props.phone}</div>
                <div class="col">{props.email}</div>
                <div class="col">{props.occupation}</div>
                <div class="col">{props.location}</div> 
            </div>
            
        </div>
    )
}

export default EmployeeRow;