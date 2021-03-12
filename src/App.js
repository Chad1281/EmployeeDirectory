import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import Header from "./components/Header";
import Search from "./components/Search";
import Title from "./components/Title";
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
    // this.setState
  }

  render() {
    return (
      <div>

      
      {/* <Wrapper> */}
        {/* <Title>Employee Directory</Title> */}
        {/* <Container> */}

          <Search handleChange = {this.handleInputChange} handleSubmit = {this.handleFormSubmit} />
          {/* <Header></Header> */}
          {/* {this.state.employees.map(employee => (
            <EmployeeCard
              id={employee.id}
              key={employee.id}
              name={employee.name}
              phone={employee.phone}
              email={employee.email}
              occupation={employee.occupation}
              location={employee.location}
            />
          ))} */}
        {/* </Container> */}
        
      {/* </Wrapper> */}
      </div>
    );
  }
}

export default App;
