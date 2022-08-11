import { useEffect, useState } from "react";
import { UserInfo } from "types";
import { constants, restApi } from "helpers";

const useMyFriends = () => {
  const [friends, setFriends] = useState<UserInfo[]>([]);

  const getFriends = async () => {
    try {
      const { data } = await restApi.get<UserInfo[]>(constants.endpoints.friends.getFriends);
      setFriends(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFriends();
  }, []);

  return {
    friends,
  };
};

export default useMyFriends;
