import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import Title from "./components/Title";
import Table from "./components/Table";
import Search from "./components/Search";
import employees from "./employees.json";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees,
    name: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.filterEmployees();
    this.setState({
      name: ""
    })
  }

  filterEmployees = name => {
    const employees = this.state.employees.filter(employee => employee.name.includes(this.state.name));
    console.log(employees)
    this.setState({ employees });
  }

  sortTable = event => {

  }

  render() {
    return (      
      <Wrapper>
        <Title>Employee Directory</Title>
        <Container>
          <Search handleChange = {this.handleInputChange} handleSubmit = {this.handleFormSubmit} />
          <Table employees= {this.state.employees}>
            
          </Table>            
        </Container>        
      </Wrapper>      
    );
  }
}

export default App;
