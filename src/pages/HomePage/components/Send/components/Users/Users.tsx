import React from "react";
import cx from "classnames";
import useMyFriends from "./utils/useMyFriends";
import User from "./components/User";

type Props = {
  className?: string
}

const Users:React.FC<Props> = ({ className }) => {
  const { friends } = useMyFriends();
  return (
    <ul className={cx(className, "flex gap-24")}>
      <li>
        <User name="All" />
      </li>
      {friends.map((user) => (
        <li key={user.id}>
          <User {...user} />
        </li>
      ))}
    </ul>
  );
};

export default Users;
