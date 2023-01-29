import React, {useContext, useEffect, useState} from 'react';
import NavBar from "./NavBar";
import {useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import SideBar from "./SideBar";
import {styled} from '@mui/system';
import {useSession} from "next-auth/react";
import {ColorModeContext} from "../../context/ColorModeContext";


const widthNavBarSize = 250;

const ContainerBox = styled(Box)(({theme}) => ({
    paddingTop: theme.spacing(1),
    marginRight: "16px",
    marginLeft: "8px",
    marginTop: "65px",
    paddingBottom: "32px",
    paddingRight: "32px",
    width: "100%"
}));

interface propsLayout {
    children: React.ReactNode
}


const LayoutDashboard = (props: propsLayout) => {

    const {loadItensMenu, itensMenu} = useContext(ColorModeContext);
    console.log("render layout dashboard");


    const {data: session, status} = useSession()
    const loading = status === "loading"
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

    useEffect(() => {
        if (status !== "loading" && session && itensMenu.length === 0) {
            console.log('deve atualizar o menu');
            loadItensMenu();
        }
    }, [status]);


    const widthNavBar = widthNavBarSize + "px";


    if (!session && loading) {
        return (
            <p>aguarde</p>
        );
    }
    if (!session) {
        return (
            <p>acesso negado</p>
        );
    }

    return (
        <Box display={isMobile ? "block" : "flex"} width="100vw" minHeight="100vh" overflow="hidden">

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

export default LayoutDashboard;
