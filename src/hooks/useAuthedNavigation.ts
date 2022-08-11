import { useNavigate } from "react-router";
import { useEffect } from "react";
import { constants } from "helpers";

const useAuthedNavigation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(constants.localStorage.accessToken);
    if (!token) {
      navigate(constants.routes.auth);
    }
  }, []);
};

export default useAuthedNavigation;
