import { CiLineHeight } from "react-icons/ci";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    fontFamily: {
        'plus-jakarta-sans': ["var(--font-plus-jakarta-sans)", "sans-serif"],
        'rubik': ["var(--font-rubik)", "sans-serif"],
    },
      colors: {
        "brand-white": "#FFFFFF",
        "brand-black": "#000000",
        "brand-gray-dark": "linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), #000",
        "brand-gray": "linear-gradient(0deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.30) 100%), #000",
      },
      fontSize: {
        'heading-1': ['60px', {
          lineHeight: '72px',
          fontWeight:'800',
        }],
        'heading-2': ['44px', {
          lineHeight: '60px',
          fontWeight:'700',
        }],
        'heading-3': ['36px', {
          lineHeight: '48px',
          fontWeight:'600',
        }],
         'subheading-regural': ['30px', {
          lineHeight: '40px',
          fontWeight:'400',
        }],
         'subheading-light': ['30px', {
          lineHeight: '40px',
          fontWeight: '300',
        }],
         'body-regural': ['24px', {
          lineHeight: '32px',
          fontWeight:'400',
        }],
         'body-light': ['24px', {
          lineHeight: '32px',
          fontWeight: '300',
        }],
         'caption-regural': ['16px', {
          lineHeight: '24px',
          fontWeight:'400',
        }],
         'caption-light': ['16px', {
          lineHeight: '24px',
          fontWeight: '300',
        }],
      },
    },
  },
  plugins: [],
};

export default config;
