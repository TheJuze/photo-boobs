import React, { useCallback, useEffect, useState } from "react";
import { Input } from "components";
import { useForm } from "react-hook-form";
import { constants, restApi } from "helpers";
import { UserInfo } from "types";
import useFriends from "./utils/useFriends";
import Friend from "./components/Friend/Friend";
import useDebounce from "../../hooks/useDebounce";

type InputProps = {
  search: string
};

const FriendsPage = () => {
  const { friends, incomingFriends, outgoingFriends } = useFriends();
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
    if (isValid && !isValidating) {
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
        <Friend {...foundUser} />
      )}
    </div>
  );
};

export default FriendsPage;
