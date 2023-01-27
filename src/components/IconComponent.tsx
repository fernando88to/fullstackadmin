import * as MuiIcon from "@mui/icons-material";


interface IconProps {
    icon: keyof typeof MuiIcon
}

export const IconComponent:React.FC<IconProps> =  ({icon}) => {
    const Icon = icon && MuiIcon[icon];
    return (
        <Icon />
    );
}


