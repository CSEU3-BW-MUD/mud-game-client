import React, { useState } from 'react';
import styled from 'styled-components';

import Login from '../components/register-login/login';
import Register from '../components/register-login/register';

const StyledContainer = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
  max-width: 55rem;
  height: 40rem;
  border: 1px solid ${props => props.theme.grey};

  @media (max-width: 600px) {
    border: none;
  }

  .form-container {
    width: 100%;
    height: 70%;
  }

  .buttons {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-family: ${props => props.theme.mainFont};

    button {
      width: 220px;
      height: 42px;
      border: none;
      background-color: ${props => props.theme.blue};
      color: ${props => props.theme.ivory};
      border-radius: 10px;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
      font-size: 1.5rem;
      transition: opacity 0.2s ease-in-out;
      cursor: pointer;

      :hover {
        opacity: 0.8;
        transition: opacity 0.2s ease-in-out;
      }

      :focus {
        outline: none;
      }
    }

    p {
      color: ${props => props.theme.ivory};
      font-size: 1.3rem;
      transition: opacity 0.2s ease-in-out;
      cursor: pointer;

      :hover {
        opacity: 0.8;
        transition: opacity 0.2s ease-in-out;
      }
    }
  }
`;

function RegisterLogin() {
  const [register, setRegister] = useState(false);
  const [inputValues, setInputValues] = useState({
    username: '',
    password: '',
    password2: '',
  });

  const changeForm = () => {
    setRegister(!register);
  };

  const changeHandler = (e) => {
      setInputValues({...inputValues, [e.target.name]: e.target.value});
  }

  return (
    <StyledContainer>
      <div className="form-container">
        {register ? (
          <Register inputValues={inputValues} changeHandler={changeHandler} />
        ) : (
          <Login inputValues={inputValues} changeHandler={changeHandler}/>
        )}
      </div>
      <div className="buttons">
        <button>{register ? 'Register' : 'Login'}</button>
        <p onClick={changeForm}>
          {register ? 'Already a member?' : 'Not yet a member? Register here'}
        </p>
      </div>
    </StyledContainer>
  );
}

export default RegisterLogin;
