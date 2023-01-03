import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import theme from "../theme";
import {useContext} from "react";
import {ColorModeContext} from "../context/ColorModeContext";


export default function About() {
    const {toggleColorMode} = useContext(ColorModeContext);
    const handleClick = () => {
        toggleColorMode();
    }
    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    my: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    MUI v5 + Next.js with TypeScript example
                </Typography>
                <Box maxWidth="sm">
                    <h2>Teste</h2>
                    <Button variant="contained">
                        Go to the home page
                    </Button>
                    <Button variant="contained" onClick={handleClick}>
                        Trocar tema
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}