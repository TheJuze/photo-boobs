const routes = {
  home: "/",
  auth: "/auth",
  profile: "/profile",
  registration: "/registration",
  login: "/login",
  friends: "/friends",
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
    searchProfile: (username: string) => `profile/search/${username}`,
    getProfileById: (userId: string) => `profile/search/${userId}`,
  },
  image: {
    sendPhoto: "image/photo",
  },
  friends: {
    getFriends: "friends",
    getIncomingFriends: "friends/requests/incoming",
    getOutgoingFriends: "friends/requests/outgoing",
    addFriend: "friends/manage/add",
    removeFriend: "friends/manage/delete",
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
