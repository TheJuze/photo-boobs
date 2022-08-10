import React, { useCallback, useEffect, useState } from "react";
import { Input } from "components";
import { useForm } from "react-hook-form";
import { constants, restApi } from "helpers";
import { UserInfo } from "types";
import useDebounce from "hooks/useDebounce";
import useFriends from "./utils/useFriends";
import Friend from "./components/Friend/Friend";

type InputProps = {
  search: string
};

const FriendsPage = () => {
  const {
    friends, incomingFriends, outgoingFriends, addFriend, deleteFriend,
  } = useFriends();
  const [foundUser, setFoundUser] = useState<UserInfo>();

  const {
    register, watch, formState: { errors, isValid, isValidating },
  } = useForm<InputProps>();

  const searchValue = watch("search");
  const debouncedSearchValue = useDebounce(searchValue, 1000);

  const handleChange = useCallback(async () => {
    try {
      const { data } = await restApi.get<UserInfo>(
        constants.endpoints.profile.searchProfile(debouncedSearchValue),
      );
      if (data) {
        setFoundUser(data);
      }
    } catch (err) {
      console.log(err);
    }
  }, [debouncedSearchValue]);

  useEffect(() => {
    if (isValid && !isValidating && searchValue) {
      handleChange();
    }
  }, [handleChange]);

  return (
    <div className="mx-28">
      <h1 className="text-h1 text-black">Your Friends</h1>
      <Input
        register={register("search")}
        error={errors.search}
        placeholder="Add new friend"
      />
      {Boolean(debouncedSearchValue) && foundUser && (
        <div className="mt-8">
          <Friend {...foundUser} onAdd={addFriend} />
        </div>
      )}
      {Boolean(incomingFriends.length) && (
      <ul>
        <h2 className="text-h2 text-black">Входящие заявки</h2>
        {incomingFriends.map((friend) => (
          <li key={friend.id}>
            <Friend {...friend} onAdd={addFriend} onDelete={deleteFriend} />
          </li>
        ))}
      </ul>
      )}
      {Boolean(outgoingFriends.length) && (
      <ul>
        <h2 className="text-h2 text-black">Исходящие заявки</h2>
        {outgoingFriends.map((friend) => (
          <li key={friend.id}>
            <Friend {...friend} onAdd={addFriend} onDelete={deleteFriend} />
          </li>
        ))}
      </ul>
      )}
      {Boolean(friends.length) && (
      <ul>
        <h2 className="text-h2 text-black">Друзья</h2>
        {friends.map((friend) => (
          <li key={friend.id}>
            <Friend {...friend} onDelete={deleteFriend} />
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};

export default FriendsPage;
