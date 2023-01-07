import * as React from 'react';
import Box from '@mui/material/Box';
import {CircularProgress} from "@mui/material";

export function CircularIndeterminate() {
    return (
        <Box sx={{
            display: 'flex', alignItems:"center",
            justifyContent:"center", width:"100%", height:"100%",
            paddingBottom:"250px"
        }}>
            <CircularProgress color="info" />
        </Box>
    );
}