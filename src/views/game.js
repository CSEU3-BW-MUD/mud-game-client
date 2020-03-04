import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

const GameContainer = styled.div`
  width: 85vw;
  height: 70vh;
  margin-top: 2rem;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  
    section {
      width: 50%;
      height: 100%;
    }
`;

function GameView(props) {
  if (!props.isLoggedIn) {
    return <Redirect to="/" />;
  }

  return <GameContainer>
    <section></section>
    <section></section>
  </GameContainer>;
}

export default GameView;
