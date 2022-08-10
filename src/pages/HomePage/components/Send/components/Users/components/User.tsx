import React from "react";
import { UserInfo } from "types";
import { getImageUrl } from "helpers";

const User:React.FC<UserInfo> = ({ imagePath }) => (
  <label className="flex flex-col">
    <input type="hidden" checked={false} />
    <img src={getImageUrl(imagePath)} alt="" className="w-24 h-24 border-transparent border-2" />
  </label>
);

export default User;
