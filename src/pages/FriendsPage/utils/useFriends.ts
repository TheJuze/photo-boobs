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

  useEffect(() => {
    getFriends();
    getIncomingFriends();
    getOutgoingFriends();
  }, []);

  return {
    friends,
    incomingFriends,
    outgoingFriends,
  };
};

export default useFriends;
