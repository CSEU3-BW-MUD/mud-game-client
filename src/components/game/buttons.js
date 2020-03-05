import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actionCreators';

const ButtonContainer = styled.div`
  width: 90%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h5 {
      color: red;
      font-size: 2rem;
      font-family: ${props => props.theme.mainFont};
  }
    .buttons{
        width: 100%;
        height: 45%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        button {
            width: 20%;
            height: 80%;
            background-color: ${props => props.theme.darkBG};
            font-size: 2rem;
            font-family: ${props => props.theme.logoFont};
            color: ${props => props.theme.ivory};
            border: 1px solid ${props => props.theme.blue};
        }
    }
`;

function Buttons(props) {
  return (
    <ButtonContainer>
      <h3>Control Panel</h3>
      <p>Move North, East, South or West...but only if there is a path available!</p>
      <div className="buttons">
          <button>N</button>
          <button>E</button>
          <button>S</button>
          <button>W</button>
      </div>
      <h5 style={{display: props.game.error ? 'block' : 'none'}}>Error! That direction is blocked!</h5>
    </ButtonContainer>
  );
}

export default connect(state => state, actions)(Buttons);
