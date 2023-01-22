import { Commissioner, Ubuntu, IBM_Plex_Serif } from "@next/font/google";
const commissioner = Commissioner({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  fallback: ["serif"],
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  fallback: ["serif"],
});
const IBMPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  fallback: ["serif"],
});
const root = `
  :root {
    --sans-font: ${commissioner.style.fontFamily};
    --heading-font: ${ubuntu.style.fontFamily};
    --serif-font:${IBMPlexSerif.style.fontFamily};
  }
  `;
export { root };
