import React from 'react';
import Card from '../Card/Card';
import './Idea.css';

const Idea = ({ideas, deleteIdea}) => {

  // A method that maps over props to create individual instances 
  // of each card
  const ideaCards = ideas.map(idea => {
    return (
      <Card 
        id={idea.id}
        title={idea.title}
        description={idea.description}
        deleteIdea={deleteIdea}

      />
    )
  })


  return (
    <div className="idea-container"> 
      {ideaCards}
    </div>

  )

}

export default Idea;
