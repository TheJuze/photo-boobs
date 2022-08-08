import React, { useRef } from "react";
import { Button } from "components";
import Webcam from "react-webcam";

const HomePage = () => {
  const webcamRef = useRef<Webcam | null>(null);

  const [imgSrc, setImgSrc] = React.useState<string | null>(null);

  const capture = () => {
    const imageSrc = webcamRef.current!.getScreenshot();
    setImgSrc(imageSrc);
  };

  // const saveImage = () => { // TODO: save to backend
  //   // restApi.put(constants.endpoints);
  // };

  return (
    <div className="flex flex-col">
      <Webcam audio={false} ref={webcamRef} videoConstraints={{ facingMode: "user" }} screenshotFormat="image/jpeg" />
      <Button onClick={capture}>CAPTURE!</Button>
      {imgSrc && (<img src={imgSrc} alt="" />)}
      <Button> send</Button>
    </div>
  );
};

export default HomePage;
