import React from "react";
import { CloseSquareIcon, DownloadIcon, SendIcon } from "assets/images/icons";
import CaptureButton from "../CaptureButton/CaptureButton";
import Users from "./components/Users/Users";

type Props = {
    imgSrc: string
    onSend: (userIds: string[]) => void
    onClear: () => void
    onSave: () => void
}

const Send: React.FC<Props> = ({
  imgSrc, onSend, onClear, onSave,
}) => {
  const handleSend = () => {
    const mockUserIds = [""];
    if (typeof onSend === "function") {
      onSend(mockUserIds);
    }
  };

  return (
    <>
      <h3 className="text-h3 font-bold mt-40">Кому отправим</h3>
      {imgSrc && (<img src={imgSrc} alt="" className="mt-32 rounded-50" />)}
      <div className="flex justify-evenly items-center w-full mt-32">
        <CloseSquareIcon onClick={onClear} className="cursor-pointer" />
        <CaptureButton onClick={handleSend}>
          <SendIcon className="absolute z-10 inset-1/2 -translate-x-1/2 -translate-y-1/2 " />
        </CaptureButton>
        <DownloadIcon onClick={onSave} />
      </div>
      <Users />
    </>
  );
};

export default Send;
