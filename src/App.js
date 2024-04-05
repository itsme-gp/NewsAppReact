
import './App.css';

import React, { Component } from 'react'
import NavBar from './Component/NavBar';
import News from './Component/News';

export default class App extends Component {
  //c = " by pratik";
  render() {
    return (
      <div>
        {/* Hello my first class based component {this.c} */}
        <NavBar/>
        <News pageSize={5} country="in" category="sports" />
      </div>
    )
  }
}
