import * as React from 'react';
import {LayoutDashboard} from "@/components/layout";

export default function IndexPage() {


    return (
        <LayoutDashboard itemMenuSelected={1}>
            <p>Pagina 1</p>
        </LayoutDashboard>
    );
}