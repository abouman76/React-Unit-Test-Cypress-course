import React, { useState } from "react";
import "../components/button.css";

const Button = () => {
  const [textButton, setTextButton] = useState("");
  return (
    <button
      className="button"
      data-cy="button"
      onClick={() => setTextButton("Loading...")}
    >
      {textButton || "Click Me"}
    </button>
  );
};

export default Button;
