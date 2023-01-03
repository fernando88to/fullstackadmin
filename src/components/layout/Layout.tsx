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

    return (
        <Box display={isMobile ? "block" : "flex"} width="100%" height="100%">

            <SideBar
                isMobile={isMobile}
                isOpenSideBar={isSideBarOpen}
                toggleSideBar={setIsSideBarOpen}/>

            <NavBar  isOpenSideBar={isSideBarOpen}
                     toggleSideBar={setIsSideBarOpen} />




            {props.children}
        </Box>
    );
};

export default Layout;
