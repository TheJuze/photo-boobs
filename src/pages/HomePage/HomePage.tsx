import React, { useRef } from "react";
import { Button } from "components";
import Webcam from "react-webcam";
import { useAuthedNavigation } from "hooks";
import { constants, restApi } from "helpers";

const HomePage = () => {
  useAuthedNavigation();

  const webcamRef = useRef<Webcam | null>(null);

  const [imgSrc, setImgSrc] = React.useState<string | null>(null);

  const capture = () => {
    const imageSrc = webcamRef.current!.getScreenshot();
    setImgSrc(imageSrc);
  };

  const sendImage = () => {
    const base64 = imgSrc?.replace("data:image/jpeg;base64,", "");
    restApi.post(constants.endpoints.image.sendPhoto, {
      file: base64,
      userIds: ["a7ffb758-e0f5-4980-9f3b-cfc21837394a"],
    });
  };

  return (
    <div className="flex flex-col">
      <Webcam audio={false} ref={webcamRef} screenshotQuality={0.5} videoConstraints={{ width: 375, height: 375, facingMode: "user" }} screenshotFormat="image/jpeg" />
      <Button onClick={capture}>CAPTURE!</Button>
      {imgSrc && (<img src={imgSrc} alt="" />)}
      <Button onClick={sendImage}>send</Button>
    </div>
  );
};

export default HomePage;
