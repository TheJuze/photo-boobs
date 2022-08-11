import axios from "axios";
import constants from "./constants";

const restApi = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

restApi.interceptors.request.use((config) => {
  const token = localStorage.getItem(constants.localStorage.accessToken);
  const tokenType = localStorage.getItem(constants.localStorage.tokenType);
  const newConfig = { ...config };

  if (!newConfig.headers) {
    newConfig.headers = {};
  }

  newConfig.headers.Authorization = `${tokenType} ${token}`;

  return newConfig;
});

restApi.interceptors.response.use((config) => config, async (error) => {
  const originalRequest = error.config;

  // eslint-disable-next-line no-underscore-dangle
  if (error.response.status === 401 && error.config && !error.config._isRetry) {
    // eslint-disable-next-line no-underscore-dangle
    originalRequest._isRetry = true;
    const lsRefreshToken = localStorage.getItem(constants.localStorage.refreshToken);
    const lsTokenType = localStorage.getItem(constants.localStorage.tokenType);
    try {
      const { data: { accessToken, refreshToken, tokenType } } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/${constants.endpoints.auth.refreshToken}`,
        {
          headers: {
            Authorization: `${lsTokenType} ${lsRefreshToken}`,
          },
        },
      );

      localStorage.setItem(constants.localStorage.accessToken, accessToken);
      localStorage.setItem(constants.localStorage.refreshToken, refreshToken);
      localStorage.setItem(constants.localStorage.tokenType, tokenType);

      return restApi.request(originalRequest);
    } catch (err) {
      console.log(err);
    }
  }

  throw error;
});

export default restApi;
