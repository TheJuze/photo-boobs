import React from "react";
import { UserInfo } from "types";
import { getImageUrl } from "helpers";
import { Button } from "components";
import ActionButton from "../ActionButton/ActionButton";

type Props = UserInfo & {
    onAdd?: (userId: string) => void
    onDelete?: (userId: string) => void
}

const Friend: React.FC<Props> = ({
  imagePath, username, name, id, onAdd, onDelete,
}) => {
  const handleAdd = () => {
    if (typeof onAdd === "function") {
      onAdd(id);
    }
  };

  const handleDelete = () => {
    if (typeof onDelete === "function") {
      onDelete(id);
    }
  };

  return (
    <div className="flex items-center">
      <div className="bg-brand-gradient p-2 rounded-full">
        <img
          src={getImageUrl(imagePath)}
          alt=" "
          className="w-32 h-32 rounded-full border border-white"
        />
      </div>
      <span className="ml-14 font-semibold text-body-medium text-gray-1">{name || username}</span>
      <div className="flex ml-auto">
        {onAdd && <ActionButton onClick={handleAdd} isDelete={false} />}
        {onDelete && <ActionButton className="ml-8" onClick={handleDelete} isDelete />}
      </div>
    </div>
  );
};

export default Friend;
