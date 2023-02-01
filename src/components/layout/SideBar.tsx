import {Avatar, Divider, Drawer, IconButton, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {FlexBetween} from "./index";
import {useTheme} from "@mui/material/styles";
import {ChevronLeft} from "@mui/icons-material";

import {useRouter} from "next/router";
import {useSession} from "next-auth/react"
import {MenuItemJSON, MenuItemTypes} from "@/types/MenuItemTypes";
import {MenuDashBoard} from "@/components/layout/MenuDashboard";


interface Iprops {
    isMobile: boolean
    isOpenSideBar: boolean
    toggleSideBar: any
    widthNavBar: string
    itemMenuSeleted: number

}

const SideBar = (props: Iprops) => {
    const theme = useTheme();
    const router = useRouter();
    const {data: session} = useSession();
    // @ts-ignore
    const secondary200 = theme.palette.secondary[200];
    // @ts-ignore
    const secondary100 = theme.palette.secondary[100];
    // @ts-ignore
    const backgroundAlt = theme.palette.background.alt;

    return (
        <Drawer anchor="left" variant="persistent"
                open={props.isOpenSideBar}
                onClose={props.toggleSideBar}
                sx={{

                    "& .MuiDrawer-paper": {
                        color: secondary200,
                        backgroundColor: backgroundAlt,
                        boxSixing: "border-box",
                        borderWidth: !props.isMobile ? 0 : "2px",
                    },
                }}>
            <Box sx={{width: props.widthNavBar}} component="nav">


                <Box m="1.5rem 2rem 2rem 3rem">
                    <FlexBetween color={theme.palette.secondary.main}>
                        <Box display="flex" alignItems="center" gap="0.5rem">
                            <Typography variant="h4" fontWeight="bold">
                                ECOMVISION
                            </Typography>
                        </Box>
                        {props.isMobile && (
                            <IconButton onClick={() => props.toggleSideBar(!props.isOpenSideBar)}>
                                <ChevronLeft/>
                            </IconButton>
                        )}
                    </FlexBetween>
                </Box>

                <Box bottom="2rem">
                    <Divider/>
                    <FlexBetween textTransform="none" gap="1rem" m="1.5rem 0 1.5rem 3rem">
                        <Avatar alt="User" src={session?.user?.image || ""}
                                imgProps={{referrerPolicy: "no-referrer"}}
                                sx={{width: 56, height: 56}}/>

                        <Box textAlign="left">
                            <Typography
                                fontWeight="bold"
                                fontSize="0.9rem"
                                sx={{color: secondary100}}>
                                {session?.user?.name}
                            </Typography>
                            {/* <Typography
                                fontSize="0.8rem"
                                sx={{color: secondary200}}>
                                 {user.occupation}
                                Programador
                            </Typography>*/}
                        </Box>
                        {/* <SettingsOutlined
                            sx={{
                                color: secondary300,
                                fontSize: "25px ",
                            }}
                        />*/}
                    </FlexBetween>
                    <Divider/>
                </Box>

                <MenuDashBoard itemMenuSeleted={props.itemMenuSeleted}/>


            </Box>
        </Drawer>
    );
}

export default SideBar;