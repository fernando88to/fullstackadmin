import React from "react";
import {LayoutLogin} from "@/components/layout";
import {Container} from "@/components/Container";
import Grid2 from "@mui/material/Unstable_Grid2";
import {styled, useTheme} from "@mui/material/styles";
import {Button, Typography} from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import {signIn, useSession} from "next-auth/react";
import {signOut} from "next-auth/react"
import {useRouter} from "next/router";

const Grid2Customizer = styled(Grid2)(({theme}) => ({
    height: "100vh"
    /*...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,*/
}));

const FontCustomizer = styled(Typography)(({theme}) => ({
    textAlign: "justify",
    fontSize: "18px",
    lineHeight: 2.2,
    textIndent: "48px",
    paddingTop: "16px",
    paddingRight: "8px"
}));
export default function Page() {
    const theme = useTheme();
    const {data: session, status} = useSession()
    const loading = status === 'loading';
    // @ts-ignore
    // const backgroundColor = theme.palette.primary[100];
    const backgroundColor = '#ffffff';
    // @ts-ignore
    const backgroundColorHeader = theme.palette.primary[700];
    const logout = async () => {
        signOut({redirect: false, callbackUrl: "/login"});

    }

    return (
        <LayoutLogin>
            <Container>
                <Grid2Customizer xs={12} md={2} sx={{backgroundColor: backgroundColor}}>
                    <Typography variant="h2" color={backgroundColorHeader} sx={{fontWeight: 'bold', m: 1}}
                                textAlign="center">Login</Typography>

                    {loading && <p>aguarde</p>}
                    {!session &&  <Button fullWidth color="error" size="large"
                                          onClick={() => {
                                              signIn('google')
                                          }}
                                          variant="outlined" startIcon={<GoogleIcon/>}>Google</Button> }


                    {session && <Button fullWidth color="error" size="large"
                                        onClick={logout}
                                        variant="outlined">Sair</Button>}

                </Grid2Customizer>
                <Grid2Customizer xs={12} md={10}>
                    <FontCustomizer>
                        No entanto, n??o podemos esquecer que a consulta aos diversos militantes nos obriga ?? an??lise das
                        posturas dos ??rg??os dirigentes com rela????o ??s suas atribui????es. ?? claro que a complexidade dos
                        estudos efetuados cumpre um papel essencial na formula????o dos relacionamentos verticais entre as
                        hierarquias. Assim mesmo, a crescente influ??ncia da m??dia obstaculiza a aprecia????o da
                        import??ncia do fluxo de informa????es. Caros amigos, o julgamento imparcial das eventualidades
                        apresenta tend??ncias no sentido de aprovar a manuten????o do remanejamento dos quadros funcionais.


                    </FontCustomizer>
                    <FontCustomizer>


                        Nunca ?? demais lembrar o peso e o significado destes problemas, uma vez que a expans??o dos
                        mercados mundiais exige a precis??o e a defini????o do impacto na agilidade decis??ria. Todavia, o
                        desenvolvimento cont??nuo de distintas formas de atua????o assume importantes posi????es no
                        estabelecimento das formas de a????o. O incentivo ao avan??o tecnol??gico, assim como a consolida????o
                        das estruturas possibilita uma melhor vis??o global do sistema de forma????o de quadros que
                        corresponde ??s necessidades.


                    </FontCustomizer>
                    <FontCustomizer>


                        Pensando mais a longo prazo, a revolu????o dos costumes talvez venha a ressaltar a relatividade do
                        retorno esperado a longo prazo. Acima de tudo, ?? fundamental ressaltar que a estrutura atual da
                        organiza????o oferece uma interessante oportunidade para verifica????o do or??amento setorial.
                        Evidentemente, o in??cio da atividade geral de forma????o de atitudes auxilia a prepara????o e a
                        composi????o das dire????es preferenciais no sentido do progresso.

                    </FontCustomizer>
                    <FontCustomizer>


                        Neste sentido, o fen??meno da Internet pode nos levar a considerar a reestrutura????o das diversas
                        correntes de pensamento. No mundo atual, a hegemonia do ambiente pol??tico estende o alcance e a
                        import??ncia dos n??veis de motiva????o departamental. Do mesmo modo, a mobilidade dos capitais
                        internacionais faz parte de um processo de gerenciamento de todos os recursos funcionais
                        envolvidos. Desta maneira, a constante divulga????o das informa????es estimula a padroniza????o dos
                        m??todos utilizados na avalia????o de resultados.


                    </FontCustomizer>
                    <FontCustomizer>


                        As experi??ncias acumuladas demonstram que o novo modelo estrutural aqui preconizado prepara-nos
                        para enfrentar situa????es at??picas decorrentes do processo de comunica????o como um todo. A pr??tica
                        cotidiana prova que o aumento do di??logo entre os diferentes setores produtivos maximiza as
                        possibilidades por conta dos procedimentos normalmente adotados. Gostaria de enfatizar que a
                        percep????o das dificuldades representa uma abertura para a melhoria do sistema de participa????o
                        geral. O que temos que ter sempre em mente ?? que a necessidade de renova????o processual agrega
                        valor ao estabelecimento dos paradigmas corporativos.


                    </FontCustomizer>
                    <FontCustomizer>


                        Por conseguinte, o consenso sobre a necessidade de qualifica????o ?? uma das consequ??ncias de
                        alternativas ??s solu????es ortodoxas. N??o obstante, o surgimento do com??rcio virtual promove a
                        alavancagem das regras de conduta normativas. Percebemos, cada vez mais, que a cont??nua expans??o
                        de nossa atividade acarreta um processo de reformula????o e moderniza????o das diretrizes de
                        desenvolvimento para o futuro. ?? importante questionar o quanto o acompanhamento das
                        prefer??ncias de consumo afeta positivamente a correta previs??o da gest??o inovadora da qual
                        fazemos parte.
                    </FontCustomizer>
                </Grid2Customizer>
            </Container>
        </LayoutLogin>
    );
}