import type { Config } from "tailwindcss";
import defaultColors from "tailwindcss/colors";
import flowbite from 'flowbite-react/tailwind';
//@ts-expect-error - flowbite
import flowbiteTypography from 'flowbite-typography';

const customColors = {
  ...defaultColors,
  ...{
    buy: defaultColors.blue[700],
    sell: defaultColors.red[700],
		primary: defaultColors.orange[900],
		second: defaultColors.blue[700],
		accent: defaultColors.purple[500],  
  }
}

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content()
  ],
	darkMode: ["class"],
  theme: {
    extend: {
      colors: customColors,
			backgroundColor: {
				"main-dark": customColors.black,
				"main-light": customColors.fuchsia[50],
				"second-dark": customColors.fuchsia[900],
				"second-light": customColors.fuchsia[400],
			},
			fill: {
				"main-dark": customColors.black,
				"main-light": customColors.fuchsia[50],
				"second-dark": customColors.fuchsia[900],
				"second-light": customColors.fuchsia[400],
			},
    },
  },
  plugins: [flowbite.plugin(), flowbiteTypography, require("@tailwindcss/typography")],
} satisfies Config;
