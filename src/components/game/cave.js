import React from 'react';
import styled from 'styled-components';

import Room from './room';

const CaveContainer = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  background-color: ${props => props.theme.grey};
`;


function Cave(props) {
    console.log(props.rooms.length)
  return (
  <CaveContainer>
      {props.rooms.reverse().map(room => {
          return(
              <Room stuff={room}/>
          )
      })}
  </CaveContainer>
  );
}

export default Cave;
