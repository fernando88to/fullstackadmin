import React, {useState} from 'react';
import NavBar from "./NavBar";
import {useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import SideBar from "./SideBar";


interface propsLayout {
    children: React.ReactNode
}

const Layout = (props: propsLayout) => {
    //const isNonMobile = useMediaQuery("(min-width: 600px)");
    const theme = useTheme();
    const isMobile: boolean = useMediaQuery(theme.breakpoints.down("sm"), {
        noSsr: false
    });
    const [isSideBarOpen, setIsSideBarOpen] = useState(true);
    const widthNavBar = "250px";

    return (
        <Box display={isMobile ? "block" : "flex"} width="100vw" height="100vh" overflow="hidden">

            <SideBar
                isMobile={isMobile}
                isOpenSideBar={isSideBarOpen}
                toggleSideBar={setIsSideBarOpen}
                widthNavBar={widthNavBar}/>

            <NavBar isOpenSideBar={isSideBarOpen}
                    toggleSideBar={setIsSideBarOpen}
                    widthNavBar={widthNavBar}
           />

            <Box sx={{paddingLeft: widthNavBar, marginTop:"65px", width:"100%"}}>
                {props.children}
            </Box>

        </Box>
    );
};

export default Layout;
