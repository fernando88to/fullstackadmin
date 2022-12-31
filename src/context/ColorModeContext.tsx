import React from "react";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {themeSettings} from "../theme";

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    }
});

interface propsColorProviderWrapper {
    children: React.ReactNode
}

export const ColorProviderWrapper = (props: propsColorProviderWrapper) => {
    const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(() => createTheme(themeSettings(mode)), [mode],);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
