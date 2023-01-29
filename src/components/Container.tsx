import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";

export const Container: React.FC<{children:React.ReactNode}> = ({children}) => {
    return (
        <Grid2 container spacing={2} >
            {children}
        </Grid2>
    );
}