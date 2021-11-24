import * as configCat from "configcat-js";
import { useState } from "react/cjs/react.development";

// Clients Congif setup
let configCatClient = configCat.createClient(
  "fK7ZCApWbkaDu14njPKZQw/vBw-jxALN0eiWNilfwboGA"
);

export const useConfigCat = () => {
  // Response States
  const [userAgeFeature, setUserAgeFeature] = useState(null);
  const [error, setError] = useState(null);

  //   Get User Age Feature
  const getUserAgeFeature = async () => {
    try {
      const res = await configCatClient.getValueAsync(
        "getUserAgeFeature",
        false
      );
      setUserAgeFeature(res);
    } catch (err) {
      setError(err.message);
    }
  };

  return { getUserAgeFeature, userAgeFeature, error };
};
