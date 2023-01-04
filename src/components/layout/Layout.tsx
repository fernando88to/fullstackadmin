import React, {useEffect, useState} from 'react';
import NavBar from "./NavBar";
import {useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import SideBar from "./SideBar";
import {styled} from '@mui/system';


const widthNavBarSize = 250;

const ContainerBox = styled(Box)(({theme}) => ({
    paddingTop: theme.spacing(1),
    marginTop: "65px",
    width: "100%"
}));

interface propsLayout {
    children: React.ReactNode
}

const Layout = (props: propsLayout) => {

    const widthNavBarSizePlus = widthNavBarSize + 8;
    const theme = useTheme();
    const isMobile: boolean = useMediaQuery(theme.breakpoints.down("sm"), {
        noSsr: false
    });
    const [isSideBarOpen, setIsSideBarOpen] = useState(true);
    const [paddingLeftContainer, setPaddingLeftContainer] = useState(widthNavBarSizePlus + "px");
    const [paddingLeftNavBar, setpaddingLeftNavBar] = useState(widthNavBarSize + "px");

    useEffect(() => {
        const draftPaddingLeftContainer = isSideBarOpen ? (widthNavBarSizePlus + "px") : "8px";
        const draftPaddingLeftNavBar = isSideBarOpen ? (widthNavBarSizePlus + "px") : "2px";
        setPaddingLeftContainer(draftPaddingLeftContainer);
        setpaddingLeftNavBar(draftPaddingLeftNavBar);
    }, [isSideBarOpen]);

    const widthNavBar = widthNavBarSize + "px";


    return (
        <Box display={isMobile ? "block" : "flex"} width="100vw" height="100vh" overflow="hidden">

            <SideBar
                isMobile={isMobile}
                isOpenSideBar={isSideBarOpen}
                toggleSideBar={setIsSideBarOpen}
                widthNavBar={widthNavBar}/>

            <NavBar isOpenSideBar={isSideBarOpen}
                    toggleSideBar={setIsSideBarOpen}
                    widthNavBar={paddingLeftNavBar}
                    isMobile={isMobile}
            />

            <ContainerBox sx={{paddingLeft: paddingLeftContainer}}>
                {props.children}
            </ContainerBox>

        </Box>
    );
};

export default Layout;
