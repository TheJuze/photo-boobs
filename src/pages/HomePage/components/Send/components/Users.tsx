import React from "react";
import { UserInfo } from "types";
import { getImageUrl } from "helpers";

const mockUsers:UserInfo[] = [
  {
    id: "a7ffb758-e0f5-4980-9f3b-cfc21837394a",
    username: "Dimba",
    name: "juze",
    status: "👉👌",
    imagePath: "",
  },
];

const Users = () => {
  const getFirstLetters = (name:string, lettersCount = 2) => name.substring(0, lettersCount);
  return (
    <ul>
      {mockUsers.map((user) => (
        <li>
          {user.imagePath ? (
            <img src={getImageUrl(user.imagePath)} alt="" />
          ) : (
            <span>{user.name ? getFirstLetters(user.name) : getFirstLetters(user.username)}</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Users;
