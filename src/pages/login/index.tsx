import React from "react";
import {LayoutLogin} from "@/components/layout";
import {Container} from "@/components/Container";
import Grid2 from "@mui/material/Unstable_Grid2";
import {styled, useTheme} from "@mui/material/styles";
import {Button, Typography} from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';

const Grid2Customizer = styled(Grid2)(({theme}) => ({
    height: "100vh"
    /*...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,*/
}));

const FontCustomizer = styled(Typography)(({theme}) => ({
   textAlign:"justify",
    fontSize:"18px",
    lineHeight:2.2,
    textIndent:"48px",
    paddingTop:"16px",
    paddingRight:"8px"
}));
export default function Page() {
    const theme = useTheme();
    // @ts-ignore
    // const backgroundColor = theme.palette.primary[100];
    const backgroundColor = '#ffffff';
    // @ts-ignore
    const backgroundColorHeader = theme.palette.primary[700];

    return (
        <LayoutLogin>
            <Container>
                <Grid2Customizer xs={12} md={2} sx={{backgroundColor: backgroundColor}}>
                    <Typography variant="h2" color={backgroundColorHeader} sx={{ fontWeight: 'bold', m: 1 }} textAlign="center">Login</Typography>
                    <Button fullWidth color="error" size="large"
                            variant="outlined" startIcon={<GoogleIcon />}>Google</Button>
                </Grid2Customizer>
                <Grid2Customizer xs={12} md={10}>
                    <FontCustomizer>
                        No entanto, não podemos esquecer que a consulta aos diversos militantes nos obriga à análise das
                        posturas dos órgãos dirigentes com relação às suas atribuições. É claro que a complexidade dos
                        estudos efetuados cumpre um papel essencial na formulação dos relacionamentos verticais entre as
                        hierarquias. Assim mesmo, a crescente influência da mídia obstaculiza a apreciação da
                        importância do fluxo de informações. Caros amigos, o julgamento imparcial das eventualidades
                        apresenta tendências no sentido de aprovar a manutenção do remanejamento dos quadros funcionais.


                    </FontCustomizer>
                    <FontCustomizer>


                        Nunca é demais lembrar o peso e o significado destes problemas, uma vez que a expansão dos
                        mercados mundiais exige a precisão e a definição do impacto na agilidade decisória. Todavia, o
                        desenvolvimento contínuo de distintas formas de atuação assume importantes posições no
                        estabelecimento das formas de ação. O incentivo ao avanço tecnológico, assim como a consolidação
                        das estruturas possibilita uma melhor visão global do sistema de formação de quadros que
                        corresponde às necessidades.


                    </FontCustomizer>
                    <FontCustomizer>


                        Pensando mais a longo prazo, a revolução dos costumes talvez venha a ressaltar a relatividade do
                        retorno esperado a longo prazo. Acima de tudo, é fundamental ressaltar que a estrutura atual da
                        organização oferece uma interessante oportunidade para verificação do orçamento setorial.
                        Evidentemente, o início da atividade geral de formação de atitudes auxilia a preparação e a
                        composição das direções preferenciais no sentido do progresso.

                    </FontCustomizer>
                    <FontCustomizer>


                        Neste sentido, o fenômeno da Internet pode nos levar a considerar a reestruturação das diversas
                        correntes de pensamento. No mundo atual, a hegemonia do ambiente político estende o alcance e a
                        importância dos níveis de motivação departamental. Do mesmo modo, a mobilidade dos capitais
                        internacionais faz parte de um processo de gerenciamento de todos os recursos funcionais
                        envolvidos. Desta maneira, a constante divulgação das informações estimula a padronização dos
                        métodos utilizados na avaliação de resultados.


                    </FontCustomizer>
                    <FontCustomizer>




                        As experiências acumuladas demonstram que o novo modelo estrutural aqui preconizado prepara-nos
                        para enfrentar situações atípicas decorrentes do processo de comunicação como um todo. A prática
                        cotidiana prova que o aumento do diálogo entre os diferentes setores produtivos maximiza as
                        possibilidades por conta dos procedimentos normalmente adotados. Gostaria de enfatizar que a
                        percepção das dificuldades representa uma abertura para a melhoria do sistema de participação
                        geral. O que temos que ter sempre em mente é que a necessidade de renovação processual agrega
                        valor ao estabelecimento dos paradigmas corporativos.


                    </FontCustomizer>
                    <FontCustomizer>


                        Por conseguinte, o consenso sobre a necessidade de qualificação é uma das consequências de
                        alternativas às soluções ortodoxas. Não obstante, o surgimento do comércio virtual promove a
                        alavancagem das regras de conduta normativas. Percebemos, cada vez mais, que a contínua expansão
                        de nossa atividade acarreta um processo de reformulação e modernização das diretrizes de
                        desenvolvimento para o futuro. É importante questionar o quanto o acompanhamento das
                        preferências de consumo afeta positivamente a correta previsão da gestão inovadora da qual
                        fazemos parte.
                    </FontCustomizer>
                </Grid2Customizer>
            </Container>
        </LayoutLogin>
    );
}