import React from 'react';
import styled from 'styled-components';

const StyledRegisterForm = styled.div`
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

    @media (max-width: 600px) {
      font-size: 3rem;
    }
  }

  input {
    width: 80%;
    height: 5rem;
    margin: 1rem 0;
    border: none;
    background-color: ${props => props.theme.grey};
    color: ${props => props.theme.ivory};
    font-size: 1.3rem;
    padding-left: 1rem;
    border-radius: 5px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.05);
    :hover {
      background-color: ${props => props.theme.brown};
      transition: background-color 0.2s ease-in-out;

    }

    :focus {
      outline: 1px solid ${props => props.theme.blue};
      background-color: ${props => props.theme.brown};
    }

    ::placeholder {
      font-size: 1.3rem;
      color: ${props => props.theme.brown};
    }
  }
`;

function Register({ inputValues, changeHandler }) {
  return (
    <StyledRegisterForm>
      <h2>start here</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={inputValues.username}
        onChange={changeHandler}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={inputValues.password}
        onChange={changeHandler}
      />
      <input
        type="password"
        name="password2"
        placeholder="Confirm password"
        value={inputValues.password2}
        onChange={changeHandler}
      />
    </StyledRegisterForm>
  );
}

export default Register;
