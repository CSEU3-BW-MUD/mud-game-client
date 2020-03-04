import React from 'react';
import styled from 'styled-components';

const DisplayContainer = styled.div`
    width: 90%;
    height: 90%;
    border: 1px solid ${props => props.theme.grey};
`

function GameDisplay(){
    return (<DisplayContainer>


    </DisplayContainer>)
}

export default GameDisplay;