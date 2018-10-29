import axios from 'axios';
const BASE_URL = process.env.BASE_URL || 'localhost:3000';

export default {
  getHighScores() {
    return axios({
      method: 'get',
      url: `${BASE_URL}/scores`,
    });
  },
  postNewScore({ score, token }) {
    return axios({
      method: 'post',
      url: `${BASE_URL}/scores/new`,
      data: {
        token,
        score,
      },
    });
  },
};
