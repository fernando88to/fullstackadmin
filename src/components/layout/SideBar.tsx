import {Drawer} from "@mui/material";
import Box from "@mui/material/Box";


interface Iprops {
    isMobile: boolean
    isOpenSideBar: boolean
    toggleSideBar: any
}

const SideBar = (props: Iprops) => {


    return (
        <Drawer anchor="left" variant="persistent"
                open={props.isOpenSideBar}
                onClose={props.toggleSideBar}
                sx={{width: "250px"}}>
            <Box width="100%">
                <Box m="1.5 rem 2rem 2 rem 3rem">
                    <p>iu</p>
                </Box>

            </Box>
        </Drawer>
    );
}

export default SideBar;