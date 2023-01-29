import {AppBar, IconButton, InputBase, Toolbar} from "@mui/material";
import {FlexBetween} from "./index";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import React, {useContext} from "react";
import {useTheme} from '@mui/material/styles';
import {ColorModeContext} from "../../context/ColorModeContext";

interface INavBar {
    // children: React.ReactNode
    isOpenSideBar: boolean
    toggleSideBar: any
    widthNavBar: string
    isMobile: boolean
}

const NavBar = (props: INavBar) => {
    console.log("renderizou a top bar");
    const theme = useTheme();
    const {toggleColorMode} = useContext(ColorModeContext);
    // @ts-ignore
    const backgroundColor = theme.palette.background.default;
    const handlerTogleTheme = () => {
        toggleColorMode();
    }

    return (
        <AppBar
            sx={{
                position: "fixed",
                background: "none",
                boxShadow: "none",
                paddingLeft:props.widthNavBar
            }}>
            <Toolbar sx={{
                justifyContent: "space-between", backgroundColor:backgroundColor, marginBottom:"2px"
            }}>
                {/*LEFT SIDE*/}
                <FlexBetween>
                    <IconButton onClick={() => props.toggleSideBar(!props.isOpenSideBar)}>
                        <MenuIcon/>
                    </IconButton>
                    <FlexBetween borderRadius="9px"
                                 gap="3rem" p="0.1rem 1.5rem">
                        <InputBase placeholder="Search..."/>
                        <IconButton>
                            <SearchIcon/>
                        </IconButton>
                    </FlexBetween>
                </FlexBetween>


                <FlexBetween gap="1.3rem">
                    <IconButton onClick={handlerTogleTheme}>
                        {theme.palette.mode === 'dark' ?
                            <DarkModeOutlinedIcon sx={{fontSize: "25px"}}/> :
                            <LightModeOutlinedIcon sx={{fontSize: "25px"}}/>
                        }
                    </IconButton>
                    <IconButton>
                        <SettingsOutlinedIcon sx={{fontSize: "25px"}}/>
                    </IconButton>
                </FlexBetween>


            </Toolbar>

        </AppBar>
    );
}

export default NavBar;