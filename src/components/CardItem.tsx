import * as React from "react";
import {useTheme} from "@mui/material/styles";
import {Card, CardContent, Typography} from "@mui/material";

export const CardItem: React.FC<{ title: string, text: string }> = (props) => {
    const theme = useTheme();
    // @ts-ignore
    const backgroundAltColor = theme.palette.background.alt;
    // @ts-ignore
    const secondary300Color = theme.palette.secondary[300];

    return (
        <Card
            sx={{
                backgroundImage: "none", backgroundColor: backgroundAltColor,
                borderRadius: "0.55rem", minHeight:"100%"

            }}>
            <CardContent>
                <Typography
                    variant="h2"
                    sx={{fontSize: 24}}

                    gutterBottom>
                    {props.title}
                </Typography>
                <Typography variant="h5" fontSize="16px"  lineHeight={1.6}
                            component="p" align="justify"
                            color={secondary300Color}>
                    {props.text}
                </Typography>


            </CardContent>


        </Card>
    );
}