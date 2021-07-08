import React from 'react';
import Form from './Form/Form';
import Idea from './Idea/Idea';
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
        <Form /> 
        <Idea />

      </main>
    );

  }
}

export default App;
