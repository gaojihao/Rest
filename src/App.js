import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Left from './components/Left';
import Middle from './components/Middle';
import Right from './components/Right';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <Header/>
        </div>
        <div className="bottom">
          <div className="fixedSize">
            <Left />
          </div>
          <div className="fixedSize">
            <Middle />
          </div>
          <div className="flexSize">
            <Right />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
