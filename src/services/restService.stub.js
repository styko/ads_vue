import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
// eslint-disable-next-line
import restService from './restService.js'; // always use '.js'
import ads from '../stubs/ads.json';
import deactivatedAds from '../stubs/deactivatedAds.json';
import login from '../stubs/login.json';
import positions from '../stubs/positions.json';

export default {
  async getLatestAds() {
    const axiosMock = new AxiosMockAdapter(axios);
    axiosMock.onGet(`${process.env.VUE_APP_REST_API_URL}/notices`).replyOnce(200, ads);
    return restService.getLatestAds().finally(
      () => axiosMock.restore(),
    );
  },
  async getDeactivatedAds() {
    const axiosMock = new AxiosMockAdapter(axios);
    axiosMock.onGet(`${process.env.VUE_APP_REST_API_URL}/notices/search/findAllByDeactivatedIsNotNull`)
      .replyOnce(200, deactivatedAds);
    return restService.getDeactivatedAds().finally(
      () => axiosMock.restore(),
    );
  },
  async getPositionsOfDeactivatedAds() {
    const axiosMock = new AxiosMockAdapter(axios);
    axiosMock.onGet(`${process.env.VUE_APP_REST_API_URL}/notices/search/findAllByDeactivatedIsNotNull`)
      .replyOnce(200, positions);
    return restService.getPositionsOfDeactivatedAds().finally(
      () => axiosMock.restore(),
    );
  },
  async login(user) {
    const axiosMock = new AxiosMockAdapter(axios);
    axiosMock.onPost(`${process.env.VUE_APP_REST_API_URL}/api/auth/signin`, {
      username: user.username,
      password: user.password,
    }).replyOnce(200, login);
    return restService.login(user).finally(
      () => axiosMock.restore(),
    );
  },
};
