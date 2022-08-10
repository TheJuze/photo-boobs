import React from "react";
import { UserInfo } from "types";
import { getImageUrl } from "helpers";

const User:React.FC<Partial<UserInfo>> = ({ imagePath, name, username }) => (
  <label className="flex flex-col items-center">
    <input type="hidden" checked={false} />
    {imagePath ? (
      <div className="rounded-full w-24 h-24 border-transparent border-2 overflow-hidden">
        <img src={getImageUrl(imagePath)} alt="" className="w-full h-full object-cover" />
      </div>
    ) : (
      <div className="w-24 h-24 bg-light-gray rounded-full border-transparent border-2 flex justify-center items-center">
        <span className="text-caption">{name}</span>
      </div>
    )}
    {imagePath && <p className="text-caption text-black mt-6 text-gray">{name || username}</p>}
  </label>
);

export default User;
