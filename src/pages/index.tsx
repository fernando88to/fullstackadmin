import * as React from 'react';
import {GetServerSideProps} from "next";
import {getSession} from "next-auth/react";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);
    const isAuthenticated = session != null;
    let destination = '/dashboard/loadMenu';
    console.log("isAuthenticated ", isAuthenticated)
    if (!isAuthenticated) {
        destination = '/login'
    }

    return {
        redirect: {
            destination: destination,
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