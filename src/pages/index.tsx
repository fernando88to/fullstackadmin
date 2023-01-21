import * as React from 'react';
import {LayoutDashboard} from "@/components/layout";
import Router from 'next/router'

export async function getServerSideProps() {
    return {
        redirect: {
            destination: '/dashboard/',
            permanent: false,
        },
    }
    return {
        props: {}, // will be passed to the page component as props
    }
}

export default function IndexPage() {
    return (<></>)
}