import React from 'react';
import { Card } from 'semantic-ui-react'
import '../App.css';


function Cards() {
  return (
    <div className="cards">
    <Card>
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    </Card.Content>
  </Card>
    </div>
  );
}

export default Cards;