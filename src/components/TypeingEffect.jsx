import { useState, useEffect } from "react";
import "./TypeingEffect.css";

const TypingEffect = ({ text, speed = 100 }) => {
  // Stanje koje sadrži trenutno otkucani deo teksta
  const [displayText, setDisplayText] = useState("");

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);

        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <h1 className="typeing-text" style={{ whiteSpace: "pre-wrap" }}>
      {displayText}
      <span className="cursor">|</span>
    </h1>
  );
};

export default TypingEffect;
