import axios from 'axios';

export async function loginAPI(username, password) {
  const credentials = { username, password };

  let success;

  await axios
    .post(`${process.env.REACT_APP_API_URL}/login/`, credentials)
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
    .post(`${process.env.REACT_APP_API_URL}/registration/`, credentials)
    .then(res => {
      window.localStorage.setItem('key', res.data.key);
      success = true;
    })
    .catch(() => {
      success = false;
    });

  return success;
}
