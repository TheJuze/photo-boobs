import React, { useCallback, useMemo, useState } from "react";
import {
  CloseSquareGradientIcon, DownloadGradientIcon, SendIcon,
} from "assets/images/icons";
import CaptureButton from "../CaptureButton/CaptureButton";
import Users from "./components/Users/Users";
import useMyFriends from "./utils/useMyFriends";

type Props = {
    imgSrc: string
    onSend: (userIds: string[]) => void
    onClear: () => void
    onSave: () => void
}

const Send: React.FC<Props> = ({
  imgSrc, onSend, onClear, onSave,
}) => {
  const { friends } = useMyFriends();
  const friendIds = useMemo(() => friends.map((friend) => friend.id), [friends]);

  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  const handleSelect = useCallback((isSelected: boolean, id?:string) => {
    if (isSelected && !id) {
      setSelectedUsers(friendIds);
    }

    if (id) {
      if (isSelected) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setSelectedUsers((prevState) => [...new Set([...prevState, id])]);
      } else {
        setSelectedUsers((prevState) => prevState.filter((user) => user !== id));
      }
    }
  }, []);

  const isAllSelected = useMemo(
    () => selectedUsers.length === friendIds.length || selectedUsers.length === 0,
    [selectedUsers, friendIds],
  );

  const handleSend = () => {
    let selectedFriends = friendIds;

    if (!isAllSelected) {
      selectedFriends = selectedUsers;
    }

    if (typeof onSend === "function") {
      onSend(selectedFriends);
    }
  };

  return (
    <>
      <h3 className="text-h3 font-bold">Кому отправим</h3>
      {imgSrc && (<img src={imgSrc} alt="" className="mt-32 rounded-50" />)}
      <div className="flex justify-evenly items-center w-full mt-32">
        <CloseSquareGradientIcon onClick={onClear} className="cursor-pointer" />
        <CaptureButton onClick={handleSend}>
          <SendIcon className="absolute z-10 inset-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
        </CaptureButton>
        <DownloadGradientIcon onClick={onSave} className="cursor-pointer" />
      </div>
      <Users
        className="mt-auto w-full"
        friends={friends}
        onSelect={handleSelect}
        isAllSelected={isAllSelected}
        selectedUsers={selectedUsers}
      />
    </>
  );
};

export default Send;
