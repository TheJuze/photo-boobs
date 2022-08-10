import React from "react";
import useMyFriends from "./utils/useMyFriends";
import User from "./components/User";

const Users = () => {
  const { friends } = useMyFriends();
  return (
    <ul className="list">
      {friends.map((user) => (
        <li key={user.id}>
          <User {...user} />
        </li>
      ))}
    </ul>
  );
};

export default Users;
