import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import theme from "../theme";
import {useContext} from "react";
import {ColorModeContext} from "../context/ColorModeContext";
import {Layout} from "../components/layout";


export default function About() {
    const {toggleColorMode} = useContext(ColorModeContext);
    const handleClick = () => {
        toggleColorMode();
    }
    return (
        <Layout>
            <Button variant="contained" onClick={handleClick}>
                Trocar tema
            </Button>
        </Layout>
    );
}