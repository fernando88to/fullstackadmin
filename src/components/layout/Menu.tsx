import {HomeOutlined, ShoppingCartOutlined} from "@mui/icons-material";
import React from "react";


export interface IMenuType {
    active?: boolean;
    icon: React.ReactNode;
    text: string;
    path?: string
}

export const menuList: IMenuType[] = [
    {text: "Dashboard", icon: <HomeOutlined/>, active: true, path: "/"},
    {text: "Client Facing", icon: null, active: false},
    {text: "Products", icon: <ShoppingCartOutlined/>, active: false, path: "/pagina2"},
];