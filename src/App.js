import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HangoverContainer from './HangoverContainer'
import CureContainer from './CureContainer'

class App extends Component {

  state = {
    hangovers: [],
    cures: [],
    toggleShow: true
  }

  componentDidMount(){
    fetch('http://localhost:3000/hangovers')
      .then(response => response.json())
      .then(hangovers => this.setState({hangovers}))

      fetch('http://localhost:3000/cures')
      .then(response => response.json())
      .then(cures => this.setState({cures})) 
  }

  handleToggle = () => {
    return this.setState({toggleShow: false})
  }

  render(){
    return (
      <div className="App">
        <header className='App-header'>HangoverPal</header>
        {this.state.toggleShow 
        
        ?(
        <>
         <h1>How hungover are you?</h1>
          <HangoverContainer hangovers={this.state.hangovers} handleToggle={this.handleToggle} />
          </>)
        :
        (<>
          <h1>Remedies</h1>
        <CureContainer cures={this.state.cures} /> 
        </>)
        } 
      
        
      </div>
  );
  }
}

export default App;
