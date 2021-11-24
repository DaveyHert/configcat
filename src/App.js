import "./App.css";
import { useState } from "react";
import { useConfigCat } from "./useConfigCat";

function App() {
  const [status, setStatus] = useState(null);
  const [birthYear, setBirthYear] = useState("");
  const [age, setAge] = useState("");
  const { getUserAgeFeature, userAgeFeature, error } = useConfigCat();

  // Calcage Feature
  const calcAge = () => {
    const answer = 2021 - birthYear;
    setAge(answer);
    setBirthYear("");
  };

  // Get feature status from ConfigCat
  const checkStatus = () => {
    getUserAgeFeature();
    setStatus(true);
  };

  return (
    <div className='App'>
      <button className='btn' onClick={checkStatus}>
        Get Age Calculator Feature
      </button>
      {status && !userAgeFeature && (
        <p>Sorry, This feature has been disabled by the Admin</p>
      )}

      {userAgeFeature && (
        <>
          <p>Calculate your age below by providing your birth year</p>
          <input
            type='number'
            value={birthYear}
            onChange={(e) => setBirthYear(e.target.value)}
          />
          <button className='btn' onClick={calcAge}>
            Get Age
          </button>

          {age && <p>You are {age} yeays old🥳</p>}
        </>
      )}

      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
