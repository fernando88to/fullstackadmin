import * as MuiIcon from "@mui/icons-material";

export interface MenuItemTypes {
    active?: boolean;
    icon: React.ReactNode;
    text: string;
    path?: string
}

export interface MenuItemJSON {
    active?: boolean;
    icon?: keyof typeof MuiIcon | null;
    text: string;
    path?: string
}