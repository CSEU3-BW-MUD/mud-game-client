import React, { useState } from 'react';
import styled from 'styled-components';

import Login from '../components/register-login/login';
import Register from '../components/register-login/register';
import Spinner from '../components/spinner';

import { loginAPI, registerAPI } from '../helpers/auth';

const StyledContainer = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
  max-width: 55rem;
  padding: 1rem;
  height: 40rem;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.1), 0 15px 12px rgba(0, 0, 0, 0.02);

  @media (max-width: 600px) {
    border: none;
  }

  .spinner-cont {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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

function RegisterLogin(props) {
  const [spinning, setSpinning] = useState(false);
  const [register, setRegister] = useState(false);
  const [inputValues, setInputValues] = useState({
    username: '',
    password: '',
    password2: '',
  });

  const changeForm = () => {
    setInputValues({
      username: '',
      password: '',
      password2: '',
    });
    setRegister(!register);
  };

  const changeHandler = e => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    setSpinning(true);
    if (register) {
      const registerRequest = await registerAPI(
        inputValues.username,
        inputValues.password,
        inputValues.password2,
      );
      if (registerRequest === true) {
        setSpinning(false);
        props.history.push('/about');
      } else {
        setSpinning(false);
      }
    } else {
      const loginRequest = await loginAPI(
        inputValues.username,
        inputValues.password,
      );
      if (loginRequest === true) {
        setSpinning(false);
        props.history.push('/about');
      } else {
        setSpinning(false);
      }
    }
  };

  if (spinning) {
    return (
      <StyledContainer>
        <div className="spinner-cont">
          <Spinner />
        </div>
      </StyledContainer>
    );
  }
  return (
    <StyledContainer>
      <div className="form-container">
        {register ? (
          <Register inputValues={inputValues} changeHandler={changeHandler} />
        ) : (
          <Login inputValues={inputValues} changeHandler={changeHandler} />
        )}
      </div>
      <div className="buttons">
        <button onClick={submit}>{register ? 'Register' : 'Login'}</button>
        <p onClick={changeForm}>
          {register ? 'Already a member?' : 'Not yet a member? Register here'}
        </p>
      </div>
    </StyledContainer>
  );
}

export default RegisterLogin;
