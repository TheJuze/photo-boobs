import React from "react";
import { UserInfo } from "types";
import { getImageUrl } from "helpers";
import cx from "classnames";

type Props = Partial<UserInfo> & {
    isChecked: boolean
    onCheck: (value: boolean, id?: string) => void
}

const User:React.FC<Props> = ({
  imagePath, name, username, id, isChecked, onCheck,
}) => {
  const imgContainer = cx(
    "w-24 h-24 rounded-full",
    "flex justify-center",
    "items-center overflow-hidden",
    { "border-2 bg-brand-gradient border-transparent": isChecked },
  );

  const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (typeof onCheck === "function") {
      onCheck(e.target.checked, id);
    }
  };

  return (
    <label className="flex flex-col items-center cursor-pointer">
      <input type="checkbox" checked={isChecked} onChange={handleChange} className="hidden" />
      {imagePath ? (
        <div className={imgContainer}>
          <img src={getImageUrl(imagePath)} alt="" className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className={cx("flex flex-col w-24 h-24 items-center justify-center cursor-pointer rounded-full", { "bg-brand-gradient": isChecked })}>
          <span className="text-caption text-black bg-gray-3 w-20 h-20 border-2 border-transparent rounded-full flex justify-center items-center">{name}</span>
        </div>
      )}
      {imagePath && <p className="text-caption text-black mt-6">{name || username}</p>}
    </label>
  );
};

export default User;
