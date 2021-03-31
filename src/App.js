import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Image from 'react-bootstrap/Image';
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import Head from "./components/Header";
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
    const name = event.target.value;
    this.filterEmployees(name);
    this.setState({name})
  }

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.setState({
  //     name: ""
  //   })
  // }

  filterEmployees = name => {
    const filter = name.toLowerCase();
    // console.log(filter);
    const employees = this.state.employees.filter(employee => {
      let values = Object.values(employee)
        .join("")
        .toLowerCase();
      return values.indexOf(filter) !== -1;
    })
    this.setState({ employees });
  }

  componentDidMount() {
    API.getRandomEmployee().then(results => {
      const employees = results.data.results.map((e) => ({
        image: <Image src={e.picture.large} />,
        name: `${e.name.first} ${e.name.last}`,
        phone: e.phone,
        email: e.email,
        location: `${e.location.city}, ${e.location.state}`,
        country: e.location.country
      }))
      // console.log(employees);
      this.setState({        
        employees: employees,
      });
    });
  }

  render() {
    return (      
      <Wrapper>
        <Head><Title>Employee Directory</Title></Head>
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
