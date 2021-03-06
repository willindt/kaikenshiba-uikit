import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#FF992A",
  primaryBright: "#FF992B",
  primaryDark: "#FF992C",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
  white: "#FFFFFF"
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#758994",
  bgimage: "/img/swap/bg-light.jpg",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#dceaf1",
  text: "#ff992a",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  card: "#00000080",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#343135",
  bgimage: "/img/swap/bg-dark.jpg",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFD",
  invertedContrast: "#191327",
  input: "#10161C",
  primaryDark: "#0098A1",
  tertiary: "#343a40",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#1e262f4d",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
