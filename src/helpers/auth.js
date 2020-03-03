import axios from 'axios';

const temporaryURL = 'https://lambda-mud-test.herokuapp.com/api';

export async function loginAPI(username, password) {
  const credentials = { username, password };

  let success;

  await axios
    .post(`${temporaryURL}/login/`, credentials)
    .then(res => {
      window.localStorage.setItem('key', res.data.key);
      success = true;
    })
    .catch(() => {
        success = false;
    });

  return success;
}

export async function registerAPI(username, password, password2) {
  const credentials = { username, password1: password, password2 };

  let success;

  await axios
    .post(`${temporaryURL}/registration/`, credentials)
    .then(res => {
      window.localStorage.setItem('key', res.data.key);
      success = true;
    })
    .catch(() => {
      success = false;
    });

  return success;
}
