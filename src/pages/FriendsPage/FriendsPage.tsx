import React, { useCallback, useEffect, useState } from "react";
import { Input } from "components";
import { useForm } from "react-hook-form";
import { constants, restApi } from "helpers";
import { UserInfo } from "types";
import useDebounce from "hooks/useDebounce";
import { useAuthedNavigation } from "hooks";
import useFriends from "./utils/useFriends";
import Friend from "./components/Friend/Friend";
import { CloseSquareIcon, SearchIcon } from "../../assets/images/icons";

type InputProps = {
  search: string
};

const FriendsPage = () => {
  useAuthedNavigation();

  const {
    friends, incomingFriends, outgoingFriends, addFriend, deleteFriend,
  } = useFriends();

  const [foundUser, setFoundUser] = useState<UserInfo>();
  const [isFocused, setIsFocused] = useState(false);
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
  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="px-40 py-80">
      <h1 className="text-h1 text-center text-body-large font-extrabold">
        <span className="text-gradient-1">Add your friend</span>
        {" "}
        💙
      </h1>
      <div className="flex items-center mt-24">
        <Input
          register={register("search")}
          error={errors.search}
          placeholder={isFocused ? "Search by nickname" : "Add new friend"}
          iconLeft={<SearchIcon className="w-16 h-16 text-gray-1" />}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
        />
        {isFocused && <CloseSquareIcon className="w-24 h-24 ml-20" />}
      </div>
      {Boolean(debouncedSearchValue) && foundUser && (
        <div className="mt-8">
          <Friend {...foundUser} onAdd={addFriend} />
        </div>
      )}
      {Boolean(incomingFriends.length) && (
      <ul className="mt-24">
        <h2 className="text-gray-1 text-body-large font-semibold">Входящие заявки</h2>
        {incomingFriends.map((friend) => (
          <li key={friend.id} className="mt-16">
            <Friend {...friend} onAdd={addFriend} onDelete={deleteFriend} />
          </li>
        ))}
      </ul>
      )}
      {Boolean(outgoingFriends.length) && (
      <ul className="mt-24">
        <h2 className="text-gray-1 text-body-large font-semibold">Исходящие заявки</h2>
        {outgoingFriends.map((friend) => (
          <li key={friend.id} className="mt-16">
            <Friend {...friend} onAdd={addFriend} onDelete={deleteFriend} />
          </li>
        ))}
      </ul>
      )}
      {Boolean(friends.length) && (
      <ul className="mt-24">
        <h2 className="text-gray-1 text-body-large font-semibold">Друзья</h2>
        {friends.map((friend) => (
          <li key={friend.id} className="mt-16">
            <Friend {...friend} onDelete={deleteFriend} />
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};

export default FriendsPage;
