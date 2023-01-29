import type {NextApiRequest, NextApiResponse} from 'next'
import {getSession} from "next-auth/react"
import {withAuthenticatedSession} from '@/core/withAuthenticatedSession'
import {MenuItemJSON} from "@/types/MenuItemTypes";


export default withAuthenticatedSession(handler);


export async function handler(req: NextApiRequest, res: NextApiResponse<MenuItemJSON[]>) {
    const {method} = req;
    const session = await getSession({req});
    switch (method) {
        case 'GET':
            res.status(200).json(menuList);
            break;
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }

}



export const menuList: MenuItemJSON[] = [
    {text: "Dashboard", icon: "HomeOutlined", path: "/dashboard"},
    {text: "Client Facing", icon: null, active: false},
    {text: "Pagina 2", icon: "ShoppingCartOutlined", active: false, path: "/dashboard/pagina2"},
    {text: "Products", icon: "ShoppingCartOutlined", active: false, path: "/dashboard/products"},
    {
        text: "Products with swr",
        icon: "Groups2Outlined",
        active: false,
        path: "/dashboard/products2"
    },
    {
        text: "Transactions",
        icon: "ReceiptLongOutlined",
        active: false,
        path: "/dashboard/pagina4"
    },
    {text: "Geography", icon: "PublicOutlined", active: false, path: "/dashboard/pagina5"},
    {text: "Cadastro", icon: null, active: false, path: "/dashboard/pagina2"},
    {text: "Segmentos", icon: "DragIndicator", active: false, path: "/dashboard/segmentos"},
    {
        text: "Segmentos (statico)",
        icon: "DragIndicator",
        active: false,
        path: "/dashboard/segmentos/segmentosStaticos"
    },
    {
        text: "Segmentos (swr)",
        icon: "DragIndicator",
        active: false,
        path: "/dashboard/segmentos/segmentosSwr"
    },
    // {text: "Daily", icon: "TodayOutlined", active: false, path: "/pagina7"},
    /* {text: "Monthly", icon: <CalendarMonthOutlined/>, active: false, path: "/pagina8"},
     {text: "Breakdown", icon: <PieChartOutlined/>, active: false, path: "/pagina9"},
     {text: "Management", icon: null, active: false, path: "/pagina20"},
     {text: "Admin", icon: <AdminPanelSettingsOutlined/>, active: false, path: "/pagina11"},
     {text: "Performance", icon: <TrendingUpOutlined/>, active: false, path: "/pagina12"},*/
];