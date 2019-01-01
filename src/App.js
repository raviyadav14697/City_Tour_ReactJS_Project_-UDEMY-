import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import TourList from './Components/Tour/TourList/TourList';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <TourList />
      </div>
    );
  }
}

export default App;
