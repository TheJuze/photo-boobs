const routes = {
  home: "/",
  auth: "/auth",
  profile: "/profile",
  registration: "/registration",
  login: "/login",
  friends: "friends",
};

const endpoints = {
  auth: {
    logout: "auth/logout",
    login: "auth/login",
    changeUsername: "auth/changeUsername",
    changePassword: "auth/changePassword",
    changeEmail: "auth/changeEmail",
    refreshToken: "auth/refreshToken",
    deleteUser: "auth/deleteUser",
    registration: "auth/registration",
    info: "auth/info",
  },
  profile: {
    profile: "profile",
    searchProfile: (username: string) => `search/${username}`,
    getProfileById: (userId: string) => `search/${userId}`,

  },
  image: {
    sendPhoto: "image/photo",
  },
};

const localStorage = {
  authToken: "auth-token",
};

export default {
  routes,
  endpoints,
  localStorage,
};
