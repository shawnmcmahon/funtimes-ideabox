import React from 'react';
import Form from '../Form/Form';
import Idea from '../Idea/Idea';
import './App.css';

class App extends React.Component {
  constructor() {
    super() 
      this.state = {
        ideas: [
          { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
          { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
          { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
        ]

    }

  }

    deleteIdea = (id) => {
      const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id);

      this.setState({ ideas: filteredIdeas })
    }
    
  
  render() {
    return (
      <main className="App">
        <h1>Ideabox: Funtimes</h1>
        <Form /> 
        <Idea ideas={this.state.ideas} deleteIdea={this.deleteIdea}/>

      </main>
    );

  }
}

export default App;
