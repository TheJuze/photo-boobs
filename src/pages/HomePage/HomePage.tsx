import React, { useRef } from "react";
import Webcam from "react-webcam";
import { useAuthedNavigation } from "hooks";
import { constants, restApi } from "helpers";
import Capture from "./components/Capture/Capture";
import Send from "./components/Send/Send";

const HomePage = () => {
  useAuthedNavigation();

  const webcamRef = useRef<Webcam | null>(null);

  const [imgSrc, setImgSrc] = React.useState<string | null>(null);

  const capture = () => {
    const imageSrc = webcamRef.current!.getScreenshot();
    setImgSrc(imageSrc);
  };

  const sendImage = (userIds: string[]) => {
    const base64 = imgSrc?.replace("data:image/jpeg;base64,", "");
    restApi.post(constants.endpoints.image.sendPhoto, {
      file: base64,
      userIds,
    });
  };

  const clearImage = () => {
    setImgSrc(null);
  };

  const saveImage = () => {
    window.location.href = imgSrc?.replace("image/jpeg", "image/octet-stream") || "";
  };

  return (
    <div className="flex flex-col items-center pt-52 pb-44 px-16 h-full">
      {imgSrc ? (
        <Send imgSrc={imgSrc} onSend={sendImage} onClear={clearImage} onSave={saveImage} />
      ) : (
        <Capture onCapture={capture} webcamRef={webcamRef} />
      )}
    </div>
  );
};

export default HomePage;
