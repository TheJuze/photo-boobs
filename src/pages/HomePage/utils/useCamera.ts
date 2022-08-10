import React from "react";
import { constants, restApi } from "helpers";
import Webcam from "react-webcam";

const useCamera = (webcamRef:React.MutableRefObject<Webcam | null>) => {
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

  return {
    imgSrc,
    capture,
    sendImage,
    clearImage,
    saveImage,
  };
};

export default useCamera;
