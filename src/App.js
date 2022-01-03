import "./App.css";
import { useState } from "react";
import { useConfigCat } from "./useConfigCat";

function App() {
  const [message, setMessage] = useState(null);
  const [birthYear, setBirthYear] = useState("");
  const [age, setAge] = useState("");

  // use custom Config Hook
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
    setMessage(true);
  };

  return (
    <div className='App'>
      <button className='btn' onClick={checkStatus}>
        Calculator Age
      </button>
      {!userAgeFeature && message && (
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
            Calculate
          </button>

          {age && <p>You are {age} yeays old🥳</p>}
        </>
      )}

      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
