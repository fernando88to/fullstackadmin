import React from "react";
import {useRouter} from "next/router";
import LoadingButton from '@mui/lab/LoadingButton';
import ReplyIcon from '@mui/icons-material/Reply';

export const BotaoVoltar: React.FC<{url:string}> = ({url}) => {
    const router = useRouter();
    const [loading, setLoading] = React.useState<boolean>(false);

    const backRoot = async () => {
        setLoading(true);
        router.push(url);
    }
    return (
        <LoadingButton

            onClick={backRoot}
            endIcon={<ReplyIcon/>}
            loading={loading}
            loadingPosition="end"
            variant="contained">
            <span>Voltar</span>
        </LoadingButton>
    );
}