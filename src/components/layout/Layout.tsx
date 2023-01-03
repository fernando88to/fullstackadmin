import React from 'react';
import {NavBar} from "./index";


interface propsLayout {
    children: React.ReactNode
}
const Layout = (props:propsLayout) => {
    return (
        <div>
            <NavBar></NavBar>

            {props.children}
        </div>
    );
};

export default Layout;
