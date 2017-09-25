import React, { Component } from 'react';
import { Container } from 'reactstrap';
import logo from '../style/logo.svg';
import '../style/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-dropdown/style.css'

import DropdownContainer from './DropdownContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h5>Welcome to React</h5>
        </div>
        <div className="App-intro">
          <Container>
            <br />
            <DropdownContainer></DropdownContainer>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
