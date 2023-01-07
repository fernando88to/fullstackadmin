import * as React from 'react';
import {useEffect, useState} from 'react';
import {Layout} from "../components/layout";
import {clientProducts} from "../clients/clientBackend";
import {Product} from "../types/Product";
import {Header} from "../components/Header";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Card, CardContent, Paper, Rating, Typography} from "@mui/material";
import {styled, useTheme} from '@mui/material/styles';
import {CircularIndeterminate} from "../components/Progress";

const Item = styled(Paper)(({theme}) => ({

    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const CardItem: React.FC<{ category: string, name: string, rating: number }> = (props) => {
    const theme = useTheme();
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    // @ts-ignore
    const backgroundAltColor = theme.palette.background.alt;
    // @ts-ignore
    const secondary700Color = theme.palette.secondary[700];
    return (
        <Card
            sx={{
                backgroundImage: "none", backgroundColor: backgroundAltColor,
                borderRadius: "0.55rem"

            }}>
            <CardContent>
                <Typography
                    sx={{fontSize: 14}}
                    color={secondary700Color}
                    gutterBottom>
                    {props.category}
                </Typography>
                <Typography variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography sx={{mb: "1.5rem"}} color={secondary700Color}>
                    ${Number(props.rating).toFixed(2)}
                </Typography>
                <Rating value={props.rating} readOnly />
            </CardContent>

        </Card>
    );
}


const ListVideo: React.FC<{ data?: Product[] }> = ({data}) => {

        return (
            <>
                <Grid2 container spacing={2}>
                    {data && data.map((item) => {
                        return (
                            <Grid2 key={item.name} xs={4}>
                                <CardItem name={item.name} category={item.category} rating={item.rating} />
                            </Grid2>
                        );
                    })}
                </Grid2>


            </>
        );

    }



export default function Page() {
    const [data, setData] = useState<Product[]>();
    // set loading to true initially
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const dataFetch = async () => {
            const videosList = await clientProducts.listAllProducts();

            // set state when the data received
            setData(videosList);
            setIsLoading(false)
        };

        dataFetch();
    }, [])


    return (
        <Layout>
            <Header title="PRODUCTS" subTitle="See your list of products"/>
            {isLoading ? <CircularIndeterminate /> : <ListVideo data={data}/>}
        </Layout>
    );
}