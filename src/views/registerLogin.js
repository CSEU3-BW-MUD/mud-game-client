import React, { useState } from 'react';
import styled from 'styled-components';

import Login from '../components/register-login/login';
import Register from '../components/register-login/register';

const StyledContainer = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
  width: 50rem;
  height: 40rem;
  border: 3px solid ${props => props.theme.grey};

    .form-container {
        width: 100%;
        height: 80%;
        background-color: red;
    }

    .buttons {
        width: 100%;
        height: 20%;
        background-color: blue;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
`;

function RegisterLogin() {
    const [register, setRegister] = useState(false);

    const changeForm = () => {
        setRegister(!register)
    }

  return (
  <StyledContainer>
      <div className="form-container">
      {register
      ? <Register />
      : <Login />
      }
      </div>
      <div className="buttons">
    <button>{register ? 'Register' : 'Login'}</button>
          <button onClick={changeForm}>Change</button>
      </div>
  </StyledContainer>
    );
}

export default RegisterLogin;
