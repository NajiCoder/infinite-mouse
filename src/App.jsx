import { useState } from "react";
import { RxCursorArrow } from "react-icons/rx";

function App() {
  const [buttonPosition, setButtonPosition] = useState({ x: "50%", y: "50%" });
  const [showCursors, setShowCursors] = useState(false);
  const [cursorCount, setCursorCount] = useState(10);

  const handleClick = () => {
    setShowCursors(true);
    setCursorCount((prevCount) => prevCount + 10);
    const buttonWidth = 100; // Adjust the button width to match your button's width
    const buttonHeight = 30; // Adjust the button height to match your button's height
    const maxPosX = window.innerWidth - buttonWidth;
    const maxPosY = window.innerHeight - buttonHeight;

    const randomX = Math.floor(Math.random() * maxPosX);
    const randomY = Math.floor(Math.random() * maxPosY);
    setButtonPosition({ x: randomX, y: randomY });
  };

  const newCursors = Array.from({ length: cursorCount });

  return (
    <main className="flex bg-white h-screen items-center justify-center relative overflow-hidden">
      <div
        className="w-32 h-8"
        style={{
          position: "absolute",
          left: buttonPosition.x,
          top: buttonPosition.y,
        }}
      >
        <button
          className="bg-blue-400 rounded-md w-full h-full cursor-default"
          onClick={handleClick}
        >
          Click me
        </button>
      </div>
      {showCursors &&
        newCursors.map((_, index) => (
          <RxCursorArrow
            key={index}
            className="absolute w-4 h-4 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: Math.random() * window.innerWidth,
              top: Math.random() * window.innerHeight,
            }}
          />
        ))}
    </main>
  );
}

export default App;
