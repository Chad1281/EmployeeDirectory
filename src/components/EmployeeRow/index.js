import React from "react";
import "./style.css";

function EmployeeRow(props) {
    return (        
        <div class="row">
            <div class="col-sm-2">{props.name}</div>
            <div class="col-sm-2" >{props.phone}</div>
            <div class="col-sm-2">{props.email}</div>
            <div class="col-sm-2">{props.occupation}</div>
            <div class="col-sm-2">{props.location}</div> 
        </div>        
    )
}

export default EmployeeRow;