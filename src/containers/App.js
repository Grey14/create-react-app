import React, { Component } from 'react';
import { Container } from 'reactstrap';
import logo from '../style/logo.svg';
import '../style/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import StudentContainer from './StudentContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h5>Welcome to React</h5>
        </div>
        <div className="App-intro">
          <Container>
            <br/>
            <StudentContainer />
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
