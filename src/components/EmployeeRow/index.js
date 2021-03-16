import React from "react";
import "./style.css";

function EmployeeRow(props) {
    return (        
        <tr>
            <th scope="col">{props.name}</th>
            <th scope="col">{props.phone}</th>
            <th scope="col">{props.email}</th>
            <th scope="col">{props.occupation}</th>
            <th scope="col">{props.location}</th> 
        </tr>        
    )
}

export default EmployeeRow;