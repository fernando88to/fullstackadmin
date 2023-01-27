import React from "react";
import {MenuItemJSON} from "@/types/MenuItemTypes";
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {useRouter} from "next/router";
import {ChevronRightOutlined} from "@mui/icons-material";
import {IconComponent} from "@/components/IconComponent";
import {useTheme} from "@mui/material/styles";


export const MenuDashBoard: React.FC<{ itens: MenuItemJSON[] }> = ({itens}) => {


    const router = useRouter();
    const theme = useTheme();

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

    return (
        <List>
            {itens.map((menu: MenuItemJSON) => {
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
                                <IconComponent icon={menu.icon}/>
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

    );
}

/*



export const menuList: IMenuType[] = [
    {text: "Dashboard", icon: <IconComponent icon="HomeOutlined"/>, active: true, path: "/dashboard"},
    {text: "Client Facing", icon: null, active: false},
    {text: "Pagina 2", icon: <IconComponent icon="ShoppingCartOutlined"/>, active: false, path: "/dashboard/pagina2"},
    {text: "Products", icon: <IconComponent icon="ShoppingCartOutlined"/>, active: false, path: "/dashboard/products"},
    {
        text: "Products with swr",
        icon: <IconComponent icon="Groups2Outlined"/>,
        active: false,
        path: "/dashboard/products2"
    },
    {
        text: "Transactions",
        icon: <IconComponent icon="ReceiptLongOutlined"/>,
        active: false,
        path: "/dashboard/pagina4"
    },
    {text: "Geography", icon: <IconComponent icon="PublicOutlined"/>, active: false, path: "/dashboard/pagina5"},
    {text: "Cadastro", icon: null, active: false, path: "/dashboard/pagina2"},
    {text: "Segmentos", icon: <IconComponent icon="DragIndicator"/>, active: false, path: "/dashboard/segmentos"},
    {
        text: "Segmentos (statico)",
        icon: <IconComponent icon="DragIndicator"/>,
        active: false,
        path: "/dashboard/segmentos/segmentosStaticos"
    },
    {
        text: "Segmentos (swr)",
        icon: <IconComponent icon="DragIndicator"/>,
        active: false,
        path: "/dashboard/segmentos/segmentosSwr"
    },
    {text: "Daily", icon:<IconComponent icon="TodayOutlined" />, active: false, path: "/pagina7"},
   /!* {text: "Monthly", icon: <CalendarMonthOutlined/>, active: false, path: "/pagina8"},
    {text: "Breakdown", icon: <PieChartOutlined/>, active: false, path: "/pagina9"},
    {text: "Management", icon: null, active: false, path: "/pagina20"},
    {text: "Admin", icon: <AdminPanelSettingsOutlined/>, active: false, path: "/pagina11"},
    {text: "Performance", icon: <TrendingUpOutlined/>, active: false, path: "/pagina12"},*!/
];*/




