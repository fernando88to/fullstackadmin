import Grid2 from "@mui/material/Unstable_Grid2";
import React from "react";

export const BoxButtonRight: React.FC<{ children: React.ReactNode, md?: 12 }> = ({children, md}) => {
    return (
        <Grid2 xs={12} container justifyContent="flex-end" md={md}>
            {children}
        </Grid2>
    );
}