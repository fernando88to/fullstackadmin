import * as React from 'react';
import {LayoutDashboard} from "@/components/layout";
import {useContext, useEffect} from "react";
import {ColorModeContext} from "../../context/ColorModeContext";
import {useRouter} from "next/router";
import {sleep} from "@/core/Sleep";

export default function LoadItensMenuPage() {
    const {loadItensMenu} = useContext(ColorModeContext);
    const router = useRouter();


    const load = async () => {
        loadItensMenu();
        router.push("/dashboard");
    }

    useEffect(() => {
        load();
    }, [])


    return (
        <LayoutDashboard>
            <p>Aguarde</p>
        </LayoutDashboard>
    );
}