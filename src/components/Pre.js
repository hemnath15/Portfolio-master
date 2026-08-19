import React, { useState, useEffect } from "react";
import "./Preloader.css";

function Preloader({ load }) {
  const [count, setCount] = useState(0);
  const [exitLoader, setExitLoader] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Counter animation
  useEffect(() => {
    if (!load) {
      setCount(100);
      return;
    }

    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 100) {
          clearInterval(interval);
          return 100;
        }

        return prevCount + 2;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [load]);

  // Exit animation
  useEffect(() => {
    if (!load) {
      // 1. Fade out content
      setExitLoader(true);

      // 2. Wait for content fade
      const timer = setTimeout(() => {
        setHidden(true);
      }, 450);

      return () => clearTimeout(timer);
    }
  }, [load]);

  // Completely remove after animation
  if (hidden) {
    return null;
  }

  return (
    <div
      id={exitLoader ? "preloader-gone" : "preloader"}
    >
      <div
        className={`loader-content ${
          exitLoader ? "content-gone" : ""
        }`}
      >
        <h1 className="counter-number">{count}</h1>

        <div className="name-box">
          <h2>Hemnath M</h2>
          <div className="red-line"></div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;