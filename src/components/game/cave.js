import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actionCreators';

import { dataArray } from '../../helpers/gamehelpers';

import Room from './room';
import Room2 from './room2';

const CaveContainer = styled.div`
  width: 550px;
  height: 550px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  background-color: ${props => props.theme.darkBG};
`;

function Cave(props) {
  props.game.rooms.forEach(room => {
    dataArray[room.y][room.x] = room;
  });
  return (
    <CaveContainer>
      {dataArray.map(row => {
        return (
          <>
            {row.map((room, i) => {
              if (room === 'x') {
                return <Room key={Math.random() * i} />;
              }
              return <Room2 key={room.id} type={room} />;
            })}
          </>
        );
      })}
    </CaveContainer>
  );
}

export default connect(state => state, actions)(Cave);
