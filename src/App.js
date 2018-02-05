import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      gifts: []
    }
  }

  addGift(){
    // e.preventDefault();
    const { gifts } = this.state;
    const ids = this.state.gifts.map(gift => gift.id);

    const maxId = ids.length > 0 ? Math.max(...ids) : 0
    gifts.push({ id: maxId+1 });
    this.setState({ gifts });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Gift Giver</h1>
        </header>
        <button className="btn-add" onClick={() => this.addGift()}>Add Gift</button>
      </div>
    );
  }
}

export default App;
