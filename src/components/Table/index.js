import React from "react";
import BootstrapTable from "react-bootstrap-table-next";


function Table(props) {
    const columns = [{
        dataField: "image",
        text: "Picture",
        sort: false,
        headerStyle: (colum, colIndex) => {
            return { width: "150px", textAlign: "center", fontSize: "1.4em" };
          },
        style: { alignItems: "center"}
    }, {
        dataField: "name",
        text: "Name",
        sort: true,
        headerStyle: (colum, colIndex) => {
            return { width: "15vw", textAlign: "center", fontSize: "1.4em" };
          },
        style: { paddingTop: "50px", fontSize: "1.3em" }
    }, {
        dataField: "phone",
        text: "Phone Number",
        sort: false,
        headerStyle: (colum, colIndex) => {
            return { width: "10vw", textAlign: "center", fontSize: "1.4em" };
          },
        style: { paddingTop: "50px", fontSize: "1.3em"  }
    }, {
        dataField: "email",
        text: "Email",
        sort: false,
        headerStyle: (colum, colIndex) => {
            return { width: "20vw", textAlign: "center", fontSize: "1.4em" };
          },
        style: { paddingTop: "50px", fontSize: "1.3em"  }
    }, {
        dataField: "location",
        text: "Location",
        sort: true,
        headerStyle: (colum, colIndex) => {
            return { width: "15vw", textAlign: "center", fontSize: "1.4em" };
          },
        style: { paddingTop: "50px", fontSize: "1.3em"  }
    }, {
        dataField: "country",
        text: "Country",
        sort: true,
        headerStyle: (colum, colIndex) => {
            return { width: "10vw", textAlign: "center", fontSize: "1.4em" };
          },
        style: { paddingTop: "50px", fontSize: "1.3em"  }
    }];

    return <BootstrapTable 
    keyField="id"
    data={ props.employees }
    columns = { columns }
    sort={ [
        { dataField: "name", order: "asc" },
        { dataField: "location", order: "asc"},
        { dataField: "email", order: "asc"}
    ]}
    striped
    hover    
    />
}

export default Table;