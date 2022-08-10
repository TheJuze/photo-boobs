import React, { useRef } from "react";
import Webcam from "react-webcam";
import { useAuthedNavigation } from "hooks";
import Capture from "./components/Capture/Capture";
import Send from "./components/Send/Send";
import useCamera from "./utils/useCamera";

const HomePage = () => {
  useAuthedNavigation();

  const webcamRef = useRef<Webcam | null>(null);

  const {
    imgSrc, sendImage, clearImage, saveImage, capture,
  } = useCamera(webcamRef);

  return (
    <div className="flex flex-col items-center pt-52 pb-44 px-16 h-full">
      {imgSrc && (
        <Send imgSrc={imgSrc} onSend={sendImage} onClear={clearImage} onSave={saveImage} />
      )}
      {webcamRef ? (
        <Capture onCapture={capture} webcamRef={webcamRef} className={imgSrc ? "hidden" : ""} />
      ) : (
        <div className="text-label text-black">loading...</div>
      )}

    </div>
  );
};

export default HomePage;
