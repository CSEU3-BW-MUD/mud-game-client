import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../store/actions/actionCreators';

const StyledNav = styled.div`
  color: ${props => props.theme.ivory};
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: ${props => props.theme.logoFont};
    font-size: 9vw;
    text-shadow: -4px 3px 0 rgba(0, 0, 0, 0.4), -14px 7px 0 rgba(0, 0, 0, 0.4);
    margin-top: 2rem;
    @media (max-width: 700px) {
      font-size: 11vw;
    }
  }

  nav {
    width: 50%;
    display: flex;
    justify-content: space-evenly;
  

  a {
    font-family: ${props => props.theme.mainFont};
    font-size: 1.6rem;
    text-shadow: -1px 1px 0 rgba(0, 0, 0, 0.2), -4px 2px 0 rgba(0, 0, 0, 0.2);
    transition: color 0.2s ease-in-out;

    @media (max-width: 700px) {
      font-size: 1.3rem;
    }

    :hover {
      color: ${props => props.theme.blue};
      transition: color 0.2s ease-in-out;
    }
  }
}
`;

function Navbar(props) {

  const logOut = () => {
    window.localStorage.clear();
    props.logOutUser();
    props.resetGame();
  }
  const row = ['x', 'x', 'x','x', 'x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x',];
  const xaxisone = props.game.rooms.filter(x => {
    return x.y === 0;
  })

  xaxisone.forEach(item => {
    row[item.x] = item
  })

  console.log(row);

  return (
    <StyledNav>
      <Link to='/'><h1>escape the cave</h1></Link>
      <nav>
        <Link to="/about">About</Link>
        {props.auth.loggedIn
        ? <Link to='/' onClick={logOut}>Logout</Link>
        : <Link to='/'>Login/Register</Link>
      }
      </nav>
    </StyledNav>
  );
}

export default connect(state => state, actions)(Navbar);
