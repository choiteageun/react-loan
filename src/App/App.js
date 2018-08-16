import React from 'react';
import "./App.css"

import Header from "../Header"
import Consultation from "../Consultation"

//const React, { Component } = require('react')


class App extends React.Component {
  render() {
    return (
      <div>
        <div className="allContainer">
      <section className="background">
          <div className="backgroundImage">
          </div>
      </section>
      <Header />
      <Consultation />
  </div>
</div>
    );
  }
}

export default App;