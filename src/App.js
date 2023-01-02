import "./styles.css";
import { useState } from "react";
export default function App() {
  const [flag, setFlag] = useState("");

  const flagDb = {
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
    "🇦🇼": "Aruba"
  };

  const flagsWeKnow = Object.keys(flagDb);

  function flagHandler(e) {
    let userInputFlag = e.target.value;
    if (flagDb[userInputFlag] === undefined) {
      return "Not found";
    }
    setFlag(flagDb[userInputFlag]);
  }

  function flagClickHandler(flag) {
    setFlag(flagDb[flag]);
  }
  return (
    <div className="App">
      <h1>Guess the Flag</h1>
      <input onChange={flagHandler} type="text" placeholder="Look for a flag" />
      <h5>Name! {flag}</h5>
      <h6>Flags we know</h6>
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
