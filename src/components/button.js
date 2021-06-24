import React, { useState } from "react";
import "../components/button.css";

const Button = () => {
  const [textButton, setTextButton] = useState("");
  return (
    <button className="button" onClick={() => setTextButton("Loading...")}>
      {textButton || "Click Me"}
    </button>
  );
};

export default Button;
