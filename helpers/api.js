import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://rawg.io/api/games?key=e857da9e151e41e583a87eaba9ff2147`,
});

export const gamesAPI = {
  getGames() {
    return instance.get();
  },
  // getGame(id) {
  //   return instance.post(`id/${id}`);
  // },
};
