import React from "react";
import Box from "@mui/material/Box";
import {useTheme} from "@mui/material/styles";


export const LayoutLogin: React.FC<{ children: React.ReactNode }> = (props) => {


    return (
        <Box sx={{height:"100vh"}}>
            {props.children}
        </Box>
    );
}