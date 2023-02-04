import * as React from 'react';
import Button from '@mui/material/Button';
import {LayoutDashboard} from "@/components/layout";
import {GetServerSideProps} from "next";

export const getServerSideProps: GetServerSideProps = async () => {
    const future = Date.now() + 6000;
    while (Date.now() < future) {
    }
    return {
        props: {},
    }
};
export default function About() {


    return (
        <LayoutDashboard itemMenuSelected={1}>
            <p>
                Pagina tres
            </p>
        </LayoutDashboard>
    );
}