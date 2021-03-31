import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Image from 'react-bootstrap/Image';
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import Title from "./components/Title";
import Table from "./components/Table";
import Search from "./components/Search";
import API from "./utils/API";

class App extends Component {
  state = {
    employees: [{}],
    name: "",
  };

  handleInputChange = event => {
    event.preventDefault();
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

  filterEmployees = e => {
    const employees = this.state.employees.filter(employee => employee.name.includes(this.state.name));
    console.log(employees)
    this.setState({ employees });
  }

  componentDidMount() {
    API.getRandomEmployee().then(results => {
      const employees = results.data.results.map((e) => ({
        image: <Image src={e.picture.medium} />,
        name: `${e.name.first} ${e.name.last}`,
        phone: e.phone,
        email: e.email,
        location: `${e.location.city}, ${e.location.state}`,
        country: e.location.country
      }))
      console.log(employees);
      this.setState({        
        employees: employees,
      });
    });
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
