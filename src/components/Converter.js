import React, { useState } from "react";
import cn from "classnames";
import { MAX_HEX_LENGTH } from "../constants";
import { hex2rgb, validateHex } from "../utils";

export default function Converter() {
  const [color, setColor] = useState("");

  const handleValueChange = (evt) => {
    setColor(evt.target.value);
  };

  const colorIsReadyToValidate = color.length === MAX_HEX_LENGTH;
  const colorIsValid = colorIsReadyToValidate ? validateHex(color) : true;
  const convertedHex2Rgb = colorIsValid ? hex2rgb(color) : "";
  const hasError = !colorIsValid;

  return (
    <form
      className={cn("wrapper", {
        error: hasError,
      })}
      style={{
        backgroundColor: colorIsReadyToValidate ? convertedHex2Rgb : "",
      }}
    >
      <div className="container">
        <input className="input" value={color} onChange={handleValueChange} />
        <input
          className={cn("input", {
            error: hasError,
          })}
          value={hasError ? "Warning!" : convertedHex2Rgb}
        />
      </div>
    </form>
  );
}
