import React, {
  createContext, FC, PropsWithChildren, useContext, useMemo, useState,
} from "react";
import { constants, restApi } from "helpers";
import { UserInfo } from "types";

type State = {
    profile: UserInfo | null
    getCurrentProfile: () => void
}

const Context = createContext<State | null>(null);

export const useProfile = () => useContext(Context);

export const ProfileProvider: FC<PropsWithChildren> = ({ children }) => {
  const [profile, setProfile] = useState<UserInfo | null>(null);

  const getCurrentProfile = async () => {
    try {
      const { data } = await restApi.get<UserInfo>(constants.endpoints.profile.profile);
      setProfile(data);
    } catch (err) {
      console.log(err);
    }
  };

  const value = useMemo(() => ({
    profile,
    getCurrentProfile,
  }), [profile]);

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};
