import axios from 'axios';

const temporaryURL = 'https://lambda-mud-test.herokuapp.com/api';

export function loginAPI(username, password) {
  const credentials = { username, password };

  console.log(credentials);
  axios
    .post(`${temporaryURL}/login/`, credentials)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err.message);
    });
}

export function registerAPI(username, password, password2) {
    const credentials = { username, password1: password, password2 };
  
    console.log(credentials);
    axios
      .post(`${temporaryURL}/registration/`, credentials)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.message);
      });
  }

