import React, { useState } from "react";
import "../Styles/App.css";
import ClipboardJS from "clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HexCodeGenerator = () => {
  const [color, setColor] = useState("#000");

  const getRgb = () => Math.floor(Math.random() * 256);

  const rgbIndex = (r, g, b) =>
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("");

  const handleGenerate = () => {
    const color = {
      r: getRgb(),
      g: getRgb(),
      b: getRgb(),
    };
    setColor(rgbIndex(color.r, color.g, color.b));
    toast(`Copy to clipboard!`);
  };

  new ClipboardJS(".button");

  return (
    <div style={{ backgroundColor: color }} className="container">
      {Array(1)
        .fill({ color })
        .map((c, i) => (
          <React.Fragment key={i}>
            <h2>---Hex Code Generator---</h2>
            <input id="color" value={c.color} onChange={() => {}} />
            <button
              data-clipboard-target="#color"
              className="button"
              style={{ color: color }}
              onClick={handleGenerate}
            >
              Generate Hex Code
            </button>
            <ToastContainer />
          </React.Fragment>
        ))}
    </div>
  );
};

export default HexCodeGenerator;
