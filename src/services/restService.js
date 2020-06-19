import axios from 'axios';
import store from '@/store';
import isoConverter from './isoConverter';

axios.interceptors.response.use((response) => {
  isoConverter.adaptIsoStrings(response.data);
  return response;
});

function authHeader() {
  const { userData } = store.state;

  if (userData && userData.token) {
    return { Authorization: `Bearer ${userData.token}` };
  }
  throw new Error('Token is missing');
}

/* eslint no-underscore-dangle: 0 */
export default {
  async getLatestAds(page, size) {
    return Object.freeze(axios.get(`${process.env.VUE_APP_REST_API_URL}/notices`, {
      headers: authHeader(),
      params: {
        page: page - 1,
        size,
        sort: 'created,desc',
      },
    })
      .then((response) => ({
        data: response.data._embedded.ads,
        page: response.data.page,
      }))
      .catch((error) => {
        console.log(error.response.data.message);
      }));
  },
  async getDeactivatedAds(page, size) {
    return Object.freeze(axios.get(`${process.env.VUE_APP_REST_API_URL}/notices/search/findAllByDeactivatedIsNotNull`, {
      headers: authHeader(),
      params: {
        page: page - 1,
        size,
        sort: 'created,desc',
      },
    })
      .then((response) => ({
        data: response.data._embedded.ads,
        page: response.data.page,
      }))
      .catch((error) => {
        debugger;
        console.log(error);
      }));
  },
  async login(user) {
    return axios
      .post(`${process.env.VUE_APP_REST_API_URL}/api/auth/signin`, {
        username: user.username,
        password: user.password,
      })
      .then((response) => store.setUserData(response.data))
      .catch((error) => {
        console.log(error);
      });
  },
};
