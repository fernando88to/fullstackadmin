import {
    AdminPanelSettingsOutlined, CalendarMonthOutlined,
    Groups2Outlined,
    HomeOutlined,
    PieChartOutlined,
    PublicOutlined, ReceiptLongOutlined,
    ShoppingCartOutlined,
    TodayOutlined, TrendingUpOutlined, DragIndicator
} from "@mui/icons-material";
import React from "react";


export interface IMenuType {
    active?: boolean;
    icon: React.ReactNode;
    text: string;
    path?: string
}


export const menuList: IMenuType[] = [
    {text: "Dashboard", icon: <HomeOutlined/>, active: true, path: "/dashboard"},
    {text: "Client Facing", icon: null, active: false},
    {text: "Pagina 2", icon: <ShoppingCartOutlined/>, active: false, path: "/dashboard/pagina2"},
    {text: "Products", icon: <ShoppingCartOutlined/>, active: false, path: "/dashboard/products"},
    {text: "Products with swr", icon: <Groups2Outlined/>, active: false, path: "/dashboard/products2"},
    {text: "Transactions", icon: <ReceiptLongOutlined/>, active: false, path: "/dashboard/pagina4"},
    {text: "Geography", icon: <PublicOutlined/>, active: false, path: "/dashboard/pagina5"},
    {text: "Cadastro", icon: null, active: false, path: "/dashboard/pagina2"},
    {text: "Segmentos", icon: <DragIndicator/>, active: false, path: "/dashboard/segmentos"},
    {text: "Segmentos (statico)", icon: <DragIndicator/>, active: false, path: "/dashboard/segmentos/segmentosStaticos"},
    {text: "Segmentos (swr)", icon: <DragIndicator/>, active: false, path: "/dashboard/segmentos/segmentosSwr"},
    {text: "Daily", icon: <TodayOutlined/>, active: false, path: "/pagina7"},
    {text: "Monthly", icon: <CalendarMonthOutlined/>, active: false, path: "/pagina8"},
    {text: "Breakdown", icon: <PieChartOutlined/>, active: false, path: "/pagina9"},
    {text: "Management", icon: null, active: false, path: "/pagina20"},
    {text: "Admin", icon: <AdminPanelSettingsOutlined/>, active: false, path: "/pagina11"},
    {text: "Performance", icon: <TrendingUpOutlined/>, active: false, path: "/pagina12"},
];