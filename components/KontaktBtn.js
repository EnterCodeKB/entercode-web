"use client";
import { useState } from "react";

export default function Button() {
  const [flipped, setFlipped] = useState({ email: false, phone: false });

  const handleFlip = (buttonType) => {
    setFlipped((prevState) => ({
      ...prevState,
      [buttonType]: !prevState[buttonType],
    }));
  };

  return (
    <div className="buttons">
      <div className={`flip-container ${flipped.email ? "flipped" : ""}`}>
        <div className="flipper">
          <button onClick={() => handleFlip("email")} className="front">
            <img
              src="/epost-knapp.jpeg"
              alt="e-post knapp"
              width={350}
              height={350}
            />
          </button>
          <button onClick={() => handleFlip("email")} className="back">
            <p>info@entercode.se</p>
          </button>
        </div>
      </div>

      <div className={`flip-container ${flipped.phone ? "flipped" : ""}`}>
        <div className="flipper">
          <button onClick={() => handleFlip("phone")} className="front">
            <img
              src="/mobil-kontakt.jpeg"
              alt="mobil knapp"
              width={350}
              height={350}
            />
          </button>
          <button onClick={() => handleFlip("phone")} className="back">
            <p>+46 70 267 38 85</p>
          </button>
        </div>
      </div>
    </div>
  );
}
