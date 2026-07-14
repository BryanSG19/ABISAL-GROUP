import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        abyss: "#000E19",
        deepblue: "#001421",
        ultradark: "#000036",
        bone: "#FEFAF1",
        warm: "#F7F5F0",
        offwhite: "#F7F6F1",
        acid: "#AEEB16",
        "acid-bright": "#C0FA1C",
        coolgray: "#A7AFB2",
        mutedgray: "#798589",
        slate: "#26333A",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
      maxWidth: {
        content: "1360px",
      },
      transitionTimingFunction: {
        abisal: "cubic-bezier(.16,1,.3,1)",
      },
    },
  },
  plugins: [],
};

export default config;
