import React from "react";
import { UserInfo } from "types";

const Friend: React.FC<UserInfo> = ({ imagePath }) => (
  <div>
    <img src={imagePath ? `${process.env.REACT_APP_BASE_BACKEND_URL}${imagePath}` : ""} alt="" />
  </div>
);

export default Friend;
