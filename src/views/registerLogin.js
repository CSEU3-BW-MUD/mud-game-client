import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
  width: 50rem;
  height: 40rem;
  border: 3px solid ${props => props.theme.grey};
`;

function RegisterLogin() {
  return <StyledContainer></StyledContainer>;
}

export default RegisterLogin;
