import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/actionCreators';

import Cave from '../components/game/cave';
import GameDisplay from '../components/game/display';

const GameContainer = styled.div`
  width: 85vw;
  height: 70vh;
  margin-top: 2rem;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;

  section {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #maze-section {
    width: 60%;
  }

  #display-section {
    width: 40%;
  }
`;

function GameView(props) {


  if (!props.auth.loggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <GameContainer>
      <section id="maze-section">
        {/* <Cave rooms={rooms} /> */}
      </section>
      <section id="display-section">
        <GameDisplay />
      </section>
    </GameContainer>
  );
}

export default connect(state => state, actions)(GameView);
