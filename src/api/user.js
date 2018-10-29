import axios from 'axios';
const BASE_URL = 'https://whackamole-.herokuapp.com';

export default {
  login({ username, password }) {
    return axios({
      method: 'post',
      url: `${BASE_URL}/authenticate/login`,
      data: {
        username,
        password,
      },
    });
  },
  register({ username, password }) {
    return axios({
      method: 'post',
      url: `${BASE_URL}/authenticate/register`,
      data: {
        username,
        password,
      },
    });
  },
};
