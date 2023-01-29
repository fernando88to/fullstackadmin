import React, {useState} from "react";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {themeSettings} from "../theme";
import {MenuItemJSON} from "@/types/MenuItemTypes";
import {clientMenu} from "@/clients/clientBackend";

interface ColorModeContextType {
    toggleColorMode: () => any; // function as property declaration
    loadItensMenu: () => any; // function as property declaration,
    itensMenu:MenuItemJSON[]
}

export const ColorModeContext = React.createContext<ColorModeContextType>({
    toggleColorMode(): any {
    },
    loadItensMenu(): any {
    },
    itensMenu: []

});

interface propsColorProviderWrapper {
    children: React.ReactNode
}

export const ColorProviderWrapper = (props: propsColorProviderWrapper) => {
    const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
    const [itens, setItens] = useState<MenuItemJSON[]>([]);

    /*const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );*/
    const changeMode = () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    }
    const loadItens = async () => {
        const menuItens = await clientMenu.getAllMenuItemByUser();
        setItens(menuItens);
        console.log('load itens do menu');
    }

    const theme = React.useMemo(() => createTheme(themeSettings(mode)), [mode],);

    return (
        <ColorModeContext.Provider value={{toggleColorMode: changeMode, loadItensMenu:loadItens, itensMenu:itens}}>
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
