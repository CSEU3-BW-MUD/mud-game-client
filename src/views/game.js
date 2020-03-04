import React from 'react';
import { Redirect } from 'react-router-dom';

function GameView(props) {
  if (!props.isLoggedIn) {
    return <Redirect to="/" />;
  }
  return <h1>This is the game!</h1>;
}

export default GameView;
