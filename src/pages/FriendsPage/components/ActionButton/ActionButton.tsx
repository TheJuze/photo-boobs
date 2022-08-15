import cx from "classnames";
import React from "react";
import { AddUserIcon, TickSquareIcon } from "assets/images/icons";

type Props = {
    onClick: () => void
    isDelete?: boolean
    className?: string
}

const ActionButton:React.FC<Props> = ({ className, isDelete, onClick }) => {
  const buttonClassName = cx(
    className,
    "px-10 py-4 rounded-full",
    {
      "bg-brand-gradient": isDelete,
      "bg-gray-3": !isDelete,
    },
  );

  return (
    <button type="button" className={buttonClassName} onClick={onClick}>
      {isDelete ? (
        <TickSquareIcon className="text-white" />
      ) : (
        <AddUserIcon className="text-gray-1" />
      )}
    </button>
  );
};

export default ActionButton;
