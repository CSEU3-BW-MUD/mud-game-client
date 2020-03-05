import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actionCreators';

const RoomContainer = styled.div`
  width: 4%;
  height: 4%;
  display: flex;
  flex-direction: column;
  .top {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;

    .top-corridor {
      width: 25%;
      height: 100%;
      background-color: ${props => props.theme.brown};
    }
  }

  .main {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;

    .side-corridor {
      height: 40%;
      width: 25%;
      background-color: ${props => props.theme.brown};
    }

    .room {
      width: 50%;
      height: 100%;
      background-color: ${props => props.theme.ivory};
    }
  }
`;

function Room2({ type, game }) {
  return (
    <RoomContainer onClick={() => console.log(type)}>
      <div className="top">
        <div
          className="top-corridor"
          style={{ opacity: type.n_to ? '1' : '0' }}
        ></div>
      </div>
      <div className="main">
        <div
          className="side-corridor"
          style={{ opacity: type.w_to ? '1' : '0' }}
        ></div>
        <div
          className="room"
          style={{
            backgroundColor:
              game.currentRoomTitle === type.title ? 'red' : null,
          }}
        ></div>
        <div
          className="side-corridor"
          style={{ opacity: type.e_to ? '1' : '0' }}
        ></div>
      </div>
      <div className="top">
        <div
          className="top-corridor"
          style={{ opacity: type.s_to ? '1' : '0' }}
        ></div>
      </div>
    </RoomContainer>
  );
}

export default connect(state => state, actions)(Room2);
