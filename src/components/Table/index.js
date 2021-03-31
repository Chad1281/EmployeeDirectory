import React from "react";
import BootstrapTable from "react-bootstrap-table-next";


function Table(props) {
    const columns = [{
        dataField: "image",
        text: "Picture",
        sort: false,
        headerStyle: (colum, colIndex) => {
            return { width: "150px", textAlign: "center" };
          },
        style: { alignItems: "center" }
    }, {
        dataField: "name",
        text: "Name",
        sort: true,
        headerStyle: (colum, colIndex) => {
            return { width: "15vw", textAlign: "center" };
          },
        style: { paddingTop: "40px", fontSize: "1.2rem" }
    }, {
        dataField: "phone",
        text: "Phone Number",
        sort: false,
        headerStyle: (colum, colIndex) => {
            return { width: "10vw", textAlign: "center" };
          },
        style: { paddingTop: "40px", fontSize: "1.2rem"  }
    }, {
        dataField: "email",
        text: "Email",
        sort: false,
        headerStyle: (colum, colIndex) => {
            return { width: "20vw", textAlign: "center" };
          },
        style: { paddingTop: "40px", fontSize: "1.2rem"  }
    }, {
        dataField: "location",
        text: "Location",
        sort: true,
        headerStyle: (colum, colIndex) => {
            return { width: "15vw", textAlign: "center" };
          },
        style: { paddingTop: "40px", fontSize: "1.2rem"  }
    }, {
        dataField: "country",
        text: "Country",
        sort: true,
        headerStyle: (colum, colIndex) => {
            return { width: "10vw", textAlign: "center" };
          },
        style: { paddingTop: "40px", fontSize: "1.2rem"  }
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