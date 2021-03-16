import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

function Table(props) {
    const columns = [{
        dataField: "name",
        text: "Name",
        sort: true
    }, {
        dataField: "phone",
        text: "Phone Number",
        sort: true
    }, {
        dataField: "email",
        text: "Email",
        sort: true
    }, {
        dataField: "occupation",
        text: "Occupation",
        sort: true
    }, {
        dataField: "location",
        text: "Location",
        sort: true
    }];

    return <BootstrapTable 
    keyField="id"
    data={ props.employees }
    columns = { columns }
    sort={ [
        { dataField: "name", order: "asc" },
        { dataField: "location", order: "asc"},
        { dataField: "occupation", order: "asc"} 
    ]}
    stiped
    hover
    condensed
    />
}

export default Table;