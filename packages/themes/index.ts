import createKyotoPreset from "./kyoto";
import createTokyoPreset from "./tokyo";

type JunsuiThemeType = {
  // The default theme is kyoto
  theme?: "kyoto" | "tokyo";
};

export const createJunsuiTheme = (options: JunsuiThemeType) => {
  switch (options.theme) {
    case "tokyo":
      return createTokyoPreset();
    default:
      return createKyotoPreset();
  }
};
