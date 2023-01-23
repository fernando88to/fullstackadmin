import * as React from 'react';
import {GetServerSideProps} from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const isAuthenticated = Boolean(context?.req.cookies?.session);
    let destination = '/dashboard/'
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