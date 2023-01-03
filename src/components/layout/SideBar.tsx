import {
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
import {
    AdminPanelSettingsOutlined,
    CalendarMonthOutlined, ChevronLeft, ChevronRightOutlined, Groups2Outlined, HomeOutlined,
    PieChartOutlined,
    PointOfSaleOutlined, PublicOutlined, ReceiptLongOutlined,
    SettingsOutlined, ShoppingCartOutlined, TodayOutlined, TrendingUpOutlined
} from "@mui/icons-material";
import {useState} from "react";


const navItems = [
    {
        text: "Dashboard",
        icon: <HomeOutlined/>,
    },
    {
        text: "Client Facing",
        icon: null,
    },
    {
        text: "Products",
        icon: <ShoppingCartOutlined/>,
    },
    {
        text: "Customers",
        icon: <Groups2Outlined/>,
    },
    {
        text: "Transactions",
        icon: <ReceiptLongOutlined/>,
    },
    {
        text: "Geography",
        icon: <PublicOutlined/>,
    },
    {
        text: "Sales",
        icon: null,
    },
    {
        text: "Overview",
        icon: <PointOfSaleOutlined/>,
    },
    {
        text: "Daily",
        icon: <TodayOutlined/>,
    },
    {
        text: "Monthly",
        icon: <CalendarMonthOutlined/>,
    },
    {
        text: "Breakdown",
        icon: <PieChartOutlined/>,
    },
    {
        text: "Management",
        icon: null,
    },
    {
        text: "Admin",
        icon: <AdminPanelSettingsOutlined/>,
    },
    {
        text: "Performance",
        icon: <TrendingUpOutlined/>,
    },
];


interface Iprops {
    isMobile: boolean
    isOpenSideBar: boolean
    toggleSideBar: any
    widthNavBar: string
}

const SideBar = (props: Iprops) => {
    const theme = useTheme();
    const [active, setActive] = useState("");
    const profileImage = "";

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
            <Box sx={{width: props.widthNavBar}}>


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
                    {navItems.map(({text, icon}) => {
                        if (!icon) {
                            return (
                                <Typography key={text} sx={{m: "2.25rem 0 1rem 3rem"}}>
                                    {text}
                                </Typography>
                            );
                        }
                        const lcText = text.toLowerCase();

                        return (
                            <ListItem key={text} disablePadding>
                                <ListItemButton
                                    onClick={() => {
                                        /* navigate(`/${lcText}`);
                                         setActive(lcText);*/
                                    }}
                                    sx={{
                                        backgroundColor:
                                            active === lcText ? secondary300 : "transparent",
                                        color:
                                            active === lcText ? secondary600 : secondary100,
                                    }}>
                                    <ListItemIcon
                                        sx={{
                                            ml: "2rem",
                                            color: active === lcText ? primary600 : secondary200,
                                        }}>
                                        {icon}
                                    </ListItemIcon>
                                    <ListItemText primary={text}/>
                                    {active === lcText && (
                                        <ChevronRightOutlined sx={{ml: "auto"}}/>
                                    )}
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>

                <Box position="absolute" bottom="2rem">
                    <Divider/>
                    <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
                        <Box
                            component="img"
                            alt="profile"
                            src={profileImage}
                            height="40px"
                            width="40px"
                            borderRadius="50%"
                            sx={{objectFit: "cover"}}
                        />
                        <Box textAlign="left">
                            <Typography
                                fontWeight="bold"
                                fontSize="0.9rem"
                                sx={{color: secondary100}}>
                                {/* {user.name}*/}
                            </Typography>
                            <Typography
                                fontSize="0.8rem"
                                sx={{color: secondary200}}
                            >
                                {/* {user.occupation}*/}
                            </Typography>
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