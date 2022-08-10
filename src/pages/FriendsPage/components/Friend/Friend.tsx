import React from "react";
import { UserInfo } from "types";
import { getImageUrl } from "helpers";
import { Button } from "components";

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
    <div className="flex items-center justify-between">
      <img
        src={getImageUrl(imagePath)}
        alt=" "
        className="w-32 h-32 rounded-full"
      />
      <span className="capitalize text-label text-black">{name || username}</span>
      <div className="flex">
        {onAdd && (<Button className="py-6" onClick={handleAdd}>Add</Button>)}
        {onDelete && (<Button className="ml-8" onClick={handleDelete}>X</Button>)}
      </div>
    </div>
  );
};

export default Friend;
