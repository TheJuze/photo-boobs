import Webcam from "react-webcam";
import React from "react";
import { useNavigate } from "react-router";
import {
  LogoIcon, ProfileIcon, UserIcon,
} from "assets/images/icons";
import { constants } from "helpers";
import cx from "classnames";
import CaptureButton from "../CaptureButton/CaptureButton";

type Props = {
  onCapture: () => void
  webcamRef: React.MutableRefObject<Webcam | null>
  className?: string
};

const Capture:React.FC<Props> = (({ onCapture, webcamRef, className }) => {
  const navigate = useNavigate();

  return (
    <div className={cx(className, "w-full h-full flex flex-col justify-between")}>
      <div className="flex justify-between w-full">
        <UserIcon onClick={() => navigate(constants.routes.friends)} />
        <ProfileIcon onClick={() => navigate(constants.routes.profile)} />
      </div>
      <div className="flex flex-col items-center w-full mt-auto">
        <div className="w-full h-auto aspect-square rounded-50 skeleton overflow-hidden">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotQuality={0.7}
            videoConstraints={{ width: 720, height: 720, facingMode: "user" }}
            screenshotFormat="image/jpeg"
          />
        </div>
        <CaptureButton
          onClick={onCapture}
          className="mt-32"
        >
          <span
            className="w-62 h-62 border-2 absolute z-10 inset-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-white"
          />
        </CaptureButton>
      </div>
      <div className="flex flex-col items-center mt-auto">
        <LogoIcon className="w-44 h-auto text-gray-1" />
        <p className="text-body-large text-gray-1">History</p>
      </div>
    </div>
  );
});

export default React.memo(Capture);
