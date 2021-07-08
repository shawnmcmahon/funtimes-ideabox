import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super() 
      this.state = {
        ideas: []

    }
    
  }
  render() {
    return (
      <main className="App">
        <h1>Ideabox: Funtimes</h1>
      </main>
    );

  }
}

export default App;
