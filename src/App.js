import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HangoverContainer from './HangoverContainer'
import CureContainer from './CureContainer'

class App extends Component {

  state = {
    hangovers: [],
    cures: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/hangovers')
      .then(response => response.json())
      .then(hangovers => this.setState({hangovers}))

      fetch('http://localhost:3000/cures')
      .then(response => response.json())
      .then(cures => this.setState({cures})) 
      
      
  }


  render(){
    return (
      <div className="App">
        <HangoverContainer hangovers={this.state.hangovers}/>
        <CureContainer cures={this.state.cures} />
        
        
      </div>
  );
  }
}

export default App;
