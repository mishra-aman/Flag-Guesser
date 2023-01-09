import React from "react";
import { useState } from "react";
import "./styles.css";

const flagDb = {
  "🇮🇳": "India",
  "🇦🇪": "United Arab Emirates",
  "🇦🇫": "Afghanistan",
  "🇦🇬": "Antigua & Barbuda",
  "🇦🇮": "Anguilla",
  "🇦🇱": "Albania",
  "🇦🇲": "Armenia",
  "🇦🇴": "Angola",
  "🇦🇶": "Antarctica",
  "🇦🇷": "Argentina",
  "🇦🇸": "American Samoa",
  "🇦🇹": "Austria",
  "🇦🇺": "Australia",
  "🇦🇼": "Aruba",
};

const flagsWeKnow = Object.keys(flagDb);

export default function App() {
  const [flag, setFlag] = useState("");
  const [flagName, setFlagName] = useState("Flag Name");

  function flagHandler(e) {
    let userInputFlag = e.target.value;
    setFlag(userInputFlag);

    if (userInputFlag in flagDb) {
      setFlagName(flagDb[userInputFlag]);
    } else {
      setFlagName("Flag not found");
    }
    if (userInputFlag === "") {
      setFlagName("");
    }
  }

  function flagClickHandler(userInputFlag) {
    setFlagName(flagDb[userInputFlag]);
  }
  return (
    <div className="App">
      <h1>Guess the Flag</h1>
      <input
        onChange={flagHandler}
        value={flag}
        placeholder={"Search your flag"}
        style={{
          padding: "1.2em",
          border: "2px solid black",
          minWidth: "80%",
          marginTop: "90px",
          marginBottom: "50px",
        }}
      />
      <h2>{flag}</h2>
      <h3> {flagName} </h3>
      <div>
        {flagsWeKnow.map((item) => {
          return (
            <span
              onClick={() => flagClickHandler(item)}
              style={{ fontSize: "40px", padding: "1rem", cursor: "pointer" }}
              key={item}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
