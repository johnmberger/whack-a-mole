import axios from 'axios';
const BASE_URL = 'https://whackamole-.herokuapp.com';

export default {
  getHighScores() {
    return axios({
      method: 'get',
      url: `${BASE_URL}/scores`,
    });
  },
  postNewScore({ username, score }) {
    return axios({
      method: 'post',
      url: `${BASE_URL}/scores/new`,
      data: {
        username,
        score,
      },
    });
  },
};
