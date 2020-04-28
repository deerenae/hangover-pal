import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HangoverContainer from './HangoverContainer'

class App extends Component {

  state = {
    hangovers: []
  }

  componentDidMount(){
    fetch('')
      .then(response => response.json())
      .then(hangovers => this.setState({hangovers}))
  }

  render(){
    return (
      <div className="App">
        <HangoverContainer hangovers={this.state.hangovers}/>
        
        
      </div>
  );
  }
}

export default App;
