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
    {text: "Início", icon: "HomeOutlined", path: "/dashboard", keyItem: 1},
    {text: "Client Facing", icon: null, active: false, keyItem: 2},
    {text: "Pagina 2", icon: "ShoppingCartOutlined", active: false, path: "/dashboard/pagina2", keyItem: 3},
    {text: "Products", icon: "ShoppingCartOutlined", active: false, path: "/dashboard/products", keyItem: 4},


    {text: "Geography", icon: "PublicOutlined", active: false, path: "/dashboard/pagina5", keyItem: 7},
    {text: "Cadastro", icon: null, active: false, path: "/dashboard/pagina2", keyItem: 8},
    {text: "Segmentos", icon: "DragIndicator", active: false, path: "/dashboard/segmentos", keyItem: 9},
    {
        text: "Segmentos (swr)",
        icon: "DragIndicator",
        active: false,
        path: "/dashboard/segmentos/segmentosSwr",
        keyItem: 11
    },
    // {text: "Daily", icon: "TodayOutlined", active: false, path: "/pagina7"},
    /* {text: "Monthly", icon: <CalendarMonthOutlined/>, active: false, path: "/pagina8"},
     {text: "Breakdown", icon: <PieChartOutlined/>, active: false, path: "/pagina9"},
     {text: "Management", icon: null, active: false, path: "/pagina20"},
     {text: "Admin", icon: <AdminPanelSettingsOutlined/>, active: false, path: "/pagina11"},
     {text: "Performance", icon: <TrendingUpOutlined/>, active: false, path: "/pagina12"},*/
];