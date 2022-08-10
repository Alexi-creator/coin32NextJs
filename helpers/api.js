import axios from 'axios';

const instance = axios.create({
  baseURL: `https://rawg.io/api/`,
});

export const gamesAPI = {
  getGames() {
    return instance
      .get(`games?key=e857da9e151e41e583a87eaba9ff2147`)
      .then((response) => response.data);
  },
  getGameSlug(slug) {
    return instance
      .get(`games/${slug}?key=e857da9e151e41e583a87eaba9ff2147`)
      .then((response) => response.data);
  },
};
