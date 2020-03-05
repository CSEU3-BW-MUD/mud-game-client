import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actionCreators';

import Buttons from './buttons';

const DisplayContainer = styled.div`
  width: 90%;
  height: 90%;
  border: 1px solid ${props => props.theme.grey};
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: ${props => props.theme.logoFont};
    color: white;
    font-size: 3rem;
    margin-top: 1rem;
  }

  h3 {
    font-family: ${props => props.theme.logoFont};
    color: white;
    font-size: 2rem;
    margin-top: 1rem;
  }

  h4 {
    font-family: ${props => props.theme.mainFont};
    color: ${props => props.theme.blue};
    font-size: 1.7rem;
    margin-top: 1rem;
  }

  p {
    width: 90%;
    color: darkgray;
    font-family: ${props => props.theme.mainFont};
    font-size: 1.5rem;
    margin: 0.5rem 0;
    text-align: center;

    span {
      text-decoration: underline;
    }
  }
`;

function GameDisplay(props) {
  return (
    <DisplayContainer>
      <h2>Mission</h2>
      <p>
        Welcome to the cave <span>{props.game.playerName}</span> You will have
        to make your way through an intricate set of rooms to escape. Your
        current location is displayed below. You can navigate using the control
        buttons below.
      </p>
      <h3>Current Location</h3>
      <h4>{props.game.currentRoomTitle}</h4>
      <p>{props.game.currentRoomDescription}</p>
      <Buttons />
    </DisplayContainer>
  );
}

export default connect(state => state, actions)(GameDisplay);
