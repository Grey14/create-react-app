import React, { Component } from 'react';
import { Container } from 'reactstrap';
import logo from '../style/logo.svg';
import '../style/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import StudentContainer from './StudentContainer'

// import React from 'react'
import Footer from '../components/Footer'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Container>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
            <StudentContainer />
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
