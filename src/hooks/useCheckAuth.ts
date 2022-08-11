import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { constants } from "helpers";

const useCheckAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const checkAuth = useCallback(async () => {
    setIsLoading(true);
    const refreshToken = localStorage.getItem(constants.localStorage.refreshToken);
    const tokenType = localStorage.getItem(constants.localStorage.tokenType);
    try {
      await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/${constants.endpoints.auth.refreshToken}`,
        {
          headers: {
            Authorization: `${tokenType} ${refreshToken}`,
          },
        },
      );
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem(constants.localStorage.accessToken)) {
      checkAuth();
    }
  }, [checkAuth]);

  return { isLoading };
};

export default useCheckAuth;
