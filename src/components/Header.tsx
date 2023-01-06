import {Box, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {TwentyTwoMpOutlined} from "@mui/icons-material";

interface Iprops {
    title: string
    subTitle: string
}

export const Header = ({title, subTitle}: Iprops) => {
    const theme = useTheme();
    // @ts-ignore
    const secondary100 = theme.palette.secondary[100];
    // @ts-ignore
    const secondary300 = theme.palette.secondary[300];

    return (
        <Box>
            <Typography variant="h2" color={secondary100} fontWeight="bold" sx={{mb: "5px"}}>
                {title}
            </Typography>
            <Typography variant="h5" color={secondary300}>
                {subTitle}
            </Typography>

        </Box>
    );
}