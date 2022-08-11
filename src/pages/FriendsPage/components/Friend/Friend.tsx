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
    <div className="flex items-center">
      <div className="bg-brand-gradient p-2 rounded-full">
        <img
          src={getImageUrl(imagePath)}
          alt=" "
          className="w-36 h-36 rounded-full"
        />
      </div>
      <span className="ml-14 font-semibold text-body-medium text-gray-1">{name || username}</span>
      <div className="flex ml-auto">
        {onAdd && (<Button className="py-6" onClick={handleAdd}>Add</Button>)}
        {onDelete && (<Button className="ml-8" onClick={handleDelete}>X</Button>)}
      </div>
    </div>
  );
};

export default Friend;
