import {createTheme, ThemeOptions} from '@mui/material/styles';
import { Roboto, Inter } from '@next/font/google';
import { red } from '@mui/material/colors';


// color design tokens export
interface ColorFamilies {
    0?: string,
    10?: string,
    50?: string,
    100: string,
    200: string,
    300: string,
    400: string,
    500: string,
    600: string,
    700: string,
    800: string,
    900: string,
    1000?: string,
}

interface TokenColor {
    grey: ColorFamilies
    primary: ColorFamilies
    secondary: ColorFamilies
}


export const tokensDark: TokenColor = {
    grey: {
        0: "#ffffff", // manually adjusted
        10: "#f6f6f6", // manually adjusted
        50: "#f0f0f0", // manually adjusted
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414",
        1000: "#000000", // manually adjusted
    },
    primary: {
        // blue
        100: "#d3d4de",
        200: "#a6a9be",
        300: "#7a7f9d",
        400: "#4d547d",
        500: "#21295c",
        600: "#191F45", // manually adjusted
        700: "#141937",
        800: "#0d1025",
        900: "#070812",
    },
    secondary: {
        // yellow
        50: "#f0f0f0", // manually adjusted
        100: "#fff6e0",
        200: "#ffedc2",
        300: "#ffe3a3",
        400: "#ffda85",
        500: "#ffd166",
        600: "#cca752",
        700: "#997d3d",
        800: "#665429",
        900: "#332a14",
    },
};

// function that reverses the color palette
function reverseTokens(tokensDark: TokenColor) : TokenColor {
    const reversedTokens = {};
    Object.entries(tokensDark).forEach(([key, val]) => {
        const keys = Object.keys(val);
        const values = Object.values(val);
        const length = keys.length;
        const reversedObj = {};
        for (let i = 0; i < length; i++) {
            // @ts-ignore
            reversedObj[keys[i]] = values[length - i - 1];
        }
        // @ts-ignore
        reversedTokens[key] = reversedObj;
    });
    return reversedTokens as TokenColor;
}

export const tokensLight: TokenColor = reverseTokens(tokensDark);


export const fontInter = Inter({
    weight: ['300', '400', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['sans-serif'],
});
// mui theme settings
export const themeSettings = (mode: string) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    // palette values for dark mode
                    primary: {
                        ...tokensDark.primary,
                        main: tokensDark.primary[400],
                        light: tokensDark.primary[400],
                    },
                    secondary: {
                        ...tokensDark.secondary,
                        main: tokensDark.secondary[300],
                    },
                    neutral: {
                        ...tokensDark.grey,
                        main: tokensDark.grey[500],
                    },
                    background: {
                        default: tokensDark.primary[600],
                        alt: tokensDark.primary[500],
                    },
                }
                : {
                    // palette values for light mode
                    primary: {
                        ...tokensLight.primary,
                        main: tokensDark.grey[50],
                        light: tokensDark.grey[100],
                    },
                    secondary: {
                        ...tokensLight.secondary,
                        main: tokensDark.secondary[600],
                        light: tokensDark.secondary[700],
                    },
                    neutral: {
                        ...tokensLight.grey,
                        main: tokensDark.grey[500],
                    },
                    background: {
                        default: tokensDark.grey[0],
                        //alt: tokensDark.grey[50],
                    },
                }),
        },
        typography: {
            fontFamily: fontInter.style.fontFamily,
            fontSize: 12,
            h1: {
                fontFamily: fontInter.style.fontFamily,
                fontSize: 40,
            },
            h2: {
                fontFamily: fontInter.style.fontFamily,
                fontSize: 32,
            },
            h3: {
                fontFamily: fontInter.style.fontFamily,
                fontSize: 24,
            },
            h4: {
                fontFamily: fontInter.style.fontFamily,
                fontSize: 20,
            },
            h5: {
                fontFamily: fontInter.style.fontFamily,
                fontSize: 16,
            },
            h6: {
                fontFamily: fontInter.style.fontFamily,
                fontSize: 14,
            },
        },
    } as ThemeOptions;
};


/*export const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
});*/




// Create a theme instance.
// Create a theme instance.
/*const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
}
const theme = createTheme(themeOptions);*/


const theme = createTheme(themeSettings('dark'));


export default theme;