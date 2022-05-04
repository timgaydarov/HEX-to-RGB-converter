import { DEFAULT_RGB_VALUE, HEX_REG_EXP, MAX_HEX_LENGTH } from "./constants";

export const validateHex = (hex) => HEX_REG_EXP.test(hex);

export const hex2rgb = (hex) => {
  if (hex.length !== MAX_HEX_LENGTH) {
    return DEFAULT_RGB_VALUE;
  }

  const r = Number("0x" + hex[1] + hex[2]);
  const g = Number("0x" + hex[3] + hex[4]);
  const b = Number("0x" + hex[5] + hex[6]);

  return `rgb(${r},${g},${b})`;
};
