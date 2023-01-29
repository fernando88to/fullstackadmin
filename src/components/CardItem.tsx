import * as React from "react";
import {useTheme} from "@mui/material/styles";
import {Card, CardActions, CardContent, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useRouter} from "next/router";

export const CardItem: React.FC<{ title: string, text: string, keyItem: number, url?:string }> = (props) => {
    const theme = useTheme();
    // @ts-ignore
    const backgroundAltColor = theme.palette.background.alt;
    // @ts-ignore
    const secondary300Color = theme.palette.secondary[300];
    const router = useRouter();

    const redirecionar = () => {
        if(props.url){
            router.push(`${props.url}${props.keyItem}`);
        }
    }
    return (
        <Card
            sx={{
                backgroundImage: "none", backgroundColor: backgroundAltColor,
                borderRadius: "0.55rem", minHeight: "100%"

            }}>
            <CardContent>
                <Typography
                    variant="h2"
                    sx={{fontSize: 24}}

                    gutterBottom>
                    {props.title}
                </Typography>
                <Typography variant="h5" fontSize="16px" lineHeight={1.6}
                            component="p" align="justify"
                            color={secondary300Color}>
                    {props.text}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={redirecionar}>editar</Button>
            </CardActions>


        </Card>
    );
}