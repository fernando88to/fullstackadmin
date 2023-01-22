import {
    Avatar,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import Box from "@mui/material/Box";
import {FlexBetween} from "./index";
import {useTheme} from "@mui/material/styles";
import {ChevronLeft, ChevronRightOutlined, SettingsOutlined} from "@mui/icons-material";
import {IMenuType, menuList} from "../layout/Menu"
import {useRouter} from "next/router";
import { useSession} from "next-auth/react"


const navItems = menuList;

interface Iprops {
    isMobile: boolean
    isOpenSideBar: boolean
    toggleSideBar: any
    widthNavBar: string
}

const SideBar = (props: Iprops) => {
    const theme = useTheme();
    const router = useRouter();
    const { data: session } = useSession();
    console.log(session?.user);
    const handleClickMenu = (path?: string) => {
        if (!path) {
            router.push("/");
            return
        }
        router.push(path);
    }

    const isSelected = (path?: string) => {
        return router.pathname === path;
    }

    // @ts-ignore
    const secondary200 = theme.palette.secondary[200];
    // @ts-ignore
    const secondary300 = theme.palette.secondary[300];
    // @ts-ignore
    const secondary600 = theme.palette.primary[600];
    // @ts-ignore
    const secondary100 = theme.palette.secondary[100];
    // @ts-ignore
    const primary600 = theme.palette.primary[600];
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
                <List>
                    {navItems.map((menu: IMenuType) => {
                        if (!menu.icon) {
                            return (
                                <Typography key={menu.text} sx={{m: "2.25rem 0 1rem 3rem"}}>
                                    {menu.text}
                                </Typography>
                            );
                        }

                        return (
                            <ListItem key={menu.text} disablePadding>
                                <ListItemButton
                                    onClick={() => {
                                        handleClickMenu(menu.path)
                                    }}
                                    sx={{
                                        backgroundColor: isSelected(menu.path) ? secondary300 : "transparent",
                                        color: isSelected(menu.path) ? secondary600 : secondary100,
                                    }}>
                                    <ListItemIcon
                                        sx={{
                                            ml: "2rem",
                                            color: isSelected(menu.path) ? primary600 : secondary200,
                                        }}>
                                        {menu.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={menu.text}/>
                                    {isSelected(menu.path) && (
                                        <ChevronRightOutlined sx={{ml: "auto"}}/>
                                    )}
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>

                <Box  bottom="2rem">
                    <Divider/>
                    <FlexBetween textTransform="none" gap="1rem" m="1.5rem 0 0 3rem">
                       {/* <Avatar alt="Remy Sharp" src="/profile.jpeg" sx={{width: 56, height: 56}}/>*/}
                        <Avatar alt="User" src={session?.user?.image || ""} sx={{width: 56, height: 56}}/>

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
                        <SettingsOutlined
                            sx={{
                                color: secondary300,
                                fontSize: "25px ",
                            }}
                        />
                    </FlexBetween>
                </Box>

            </Box>
        </Drawer>
    );
}

export default SideBar;