import Webcam from "react-webcam";
import React from "react";
import { useNavigate } from "react-router";
import { ProfileIcon, ShowIcon, UserIcon } from "assets/images/icons";
import { constants } from "helpers";
import CaptureButton from "../CaptureButton/CaptureButton";

type Props = {
  onCapture: () => void
  webcamRef: React.MutableRefObject<Webcam | null>
};

const Capture:React.FC<Props> = ({ onCapture, webcamRef }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between w-full">
        <UserIcon onClick={() => navigate(constants.routes.friends)} />
        <ProfileIcon onClick={() => navigate(constants.routes.profile)} />
      </div>
      <div className="flex flex-col items-center">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotQuality={0.5}
          videoConstraints={{ width: 375, height: 375, facingMode: "user" }}
          screenshotFormat="image/jpeg"
          className="mt-72 rounded-50"
        />
        <CaptureButton
          onClick={onCapture}
          className="mt-32"
        >
          <span className="w-62 h-62 border-2 absolute z-10 inset-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-white" />
        </CaptureButton>
      </div>
      <div className="flex flex-col items-center mt-auto">
        <ShowIcon />
        <p className="text-label">History</p>
      </div>
    </>
  );
};

export default Capture;
