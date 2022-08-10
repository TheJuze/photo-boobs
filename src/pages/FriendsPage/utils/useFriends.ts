import { useEffect, useState } from "react";
import { constants, restApi } from "helpers";
import { UserInfo } from "types";

const useFriends = () => {
  const [friends, setFriends] = useState<UserInfo[]>([]);
  const [incomingFriends, setIncomingFriends] = useState<UserInfo[]>([]);
  const [outgoingFriends, setOutgoingFriends] = useState<UserInfo[]>([]);

  const getFriends = async () => {
    try {
      const { data } = await restApi.get<UserInfo[]>(constants.endpoints.friends.getFriends);
      setFriends(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getIncomingFriends = async () => {
    try {
      const { data } = await restApi.get<UserInfo[]>(
        constants.endpoints.friends.getIncomingFriends,
      );
      setIncomingFriends(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getOutgoingFriends = async () => {
    try {
      const { data } = await restApi.get<UserInfo[]>(
        constants.endpoints.friends.getOutgoingFriends,
      );
      setOutgoingFriends(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllFriends = () => {
    getFriends();
    getIncomingFriends();
    getOutgoingFriends();
  };

  const addFriend = async (userId: string) => {
    try {
      await restApi.post(constants.endpoints.friends.addFriend, { userId });
      // TODO: refactor this
      getAllFriends();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteFriend = async (userId: string) => {
    try {
      await restApi.post(constants.endpoints.friends.removeFriend, { userId });
      // TODO: refactor this
      getAllFriends();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllFriends();
  }, []);

  return {
    friends,
    incomingFriends,
    outgoingFriends,
    addFriend,
    deleteFriend,
  };
};

export default useFriends;
