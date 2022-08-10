import { useEffect, useState } from "react";
import { constants, restApi } from "helpers";

const useFriends = () => {
  const [friends, setFriends] = useState([]);
  const [incomingFriends, setIncomingFriends] = useState([]);
  const [outgoingFriends, setOutgoingFriends] = useState([]);

  const getFriends = async () => {
    setFriends(await restApi.get(constants.endpoints.friends.getFriends));
  };

  const getIncomingFriends = async () => {
    setIncomingFriends(await restApi.get(constants.endpoints.friends.getIncomingFriends));
  };

  const getOutgoingFriends = async () => {
    setOutgoingFriends(await restApi.get(constants.endpoints.friends.getOutgoingFriends));
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
