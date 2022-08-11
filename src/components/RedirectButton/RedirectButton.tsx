import React from "react";
import { useNavigate } from "react-router";
import { ArrowLeftIcon } from "assets/images/icons";

type Props = {
  route: string
};

const RedirectButton: React.FC<Props> = ({ route }) => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate(route);
  };

  return (
    <button
      type="button"
      className="rounded-full w-32 h-32 bg-white-30 flex justify-center items-center text-white"
      onClick={redirectToHome}
    >
      <ArrowLeftIcon />
    </button>
  );
};

export default RedirectButton;
