import React from 'react';
import styled from 'styled-components';

const StyledLoginForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: ${props => props.theme.ivory};
    font-family: ${props => props.theme.logoFont};
    font-size: 4rem;
    margin: 1rem 0 2rem 0;
  }

  input {
    width: 80%;
    height: 6rem;
    margin: 2rem 0;
    border: none;
    background-color: ${props => props.theme.grey};
    color: ${props => props.theme.ivory};
    font-size: 1.7rem;
    padding-left: 1rem;
    border-radius: 5px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.05);

    ::placeholder {
      font-size: 1.3rem;
      color: ${props => props.theme.brown};
    }
  }
`;

function Login() {
  return (
    <StyledLoginForm>
      <h2>welcome back</h2>
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
    </StyledLoginForm>
  );
}

export default Login;
