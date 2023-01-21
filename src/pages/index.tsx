import * as React from 'react';
import {LayoutDashboard} from "@/components/layout";


/*const Item = styled(Paper)(({theme}) => ({

    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));*/

export default function IndexPage() {


    return (
        <LayoutDashboard>
            <p>Pagina 1</p>
        </LayoutDashboard>
    );
}