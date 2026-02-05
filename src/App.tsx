import { useState } from "react";
import Confetti from "react-confetti";
import "./App.css";

const funnyMessages = [
  "NO 😐",
  "Are you sure? 🤨",
  "Really sure?? 😳",
  "Think again 🧠",
  "Last chance 😈",
  "You will regret this 😂",
  "Just click YES already 💖",
  "STOP PLAYING 😭",
  "I’m begging you 😭🙏",
  "Noooo, not yet 😬",
  "Come on… YES! 😘",
  "Don’t be mean 😢",
  "I promise fun ahead 🎉",
  "You can’t resist 💕",
  "I’m serious! 😳",
  "Think of the hugs 🤗",
  "The universe says YES 🌟",
  "No way… YES way! 😏",
  "You’re trapped 😈",
  "Click YES or else 😜"
];


function App() {
  const [yesSize, setYesSize] = useState(1);
  const [noOffset, setNoOffset] = useState({ x: 0, y: 0 });
  const [celebrate, setCelebrate] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [noIndex, setNoIndex] = useState(0);

  const handleNo = () => {
    // Random offset, smaller values so it stays next to YES
    const x = Math.random() * 120 - 60;
    const y = Math.random() * 40 - 20;

    setNoOffset({ x, y });
    setYesSize((prev) => prev + 0.2);
    setNoIndex((prev) => (prev + 1) % funnyMessages.length);
  };

  const handleYes = () => {
    setCelebrate(true);
    setShowMessage(true); // show message immediately
  };

  return (
    <div className="App">
      {celebrate && <Confetti />}

      <div className="picture_container">
        <img src="image.jpeg" alt="tree" />
      </div>

      <h1>Are you ready for an official second year together ?</h1>

      {!showMessage && (
        <div className="buttons_container">
          <div className="yes_wrapper" style={{ zIndex: 10 }}>
            <button
              className="yes_btn"
              style={{ transform: `scale(${yesSize})` }}
              onClick={handleYes}
            >
              YES 💖
            </button>
          </div>

          <div
            className="no_wrapper"
            style={{
              transform: `translate(${noOffset.x}px, ${noOffset.y}px)`,
              zIndex: 1,
            }}
          >
            <button className="no_btn" onMouseEnter={handleNo} onClick={handleNo}>
              {funnyMessages[noIndex]}
            </button>
          </div>
        </div>
      )}

      {showMessage && (
        <h2 className="love_message">
          💖 Yaaay!! I knew you would say YES! Let’s enjoy our love forever 🥹✨
        </h2>
      )}
    </div>
  );
}

export default App;
