import * as React from 'react';
import Head from 'next/head';
import {AppProps} from 'next/app';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider, EmotionCache} from '@emotion/react';
import theme from '../theme';
import createEmotionCache from '../createEmotionCache';
import {ColorProviderWrapper} from "../context/ColorModeContext";
import {Router} from "next/router";

import NProgress from 'nprogress';
//import do css do nprogress
import "nprogress/nprogress.css";
import { Analytics } from '@vercel/analytics/react';


NProgress.configure({showSpinner: false});
/**
 * toda vez que a rota for alterada
 */
Router.events.on("routeChangeStart", () => {
    NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
    NProgress.done();
});

Router.events.on("routeChangeError", () => {
    NProgress.done();
});

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}


export default function MyApp(props: MyAppProps) {
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>
            <ColorProviderWrapper>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline/>
                <Component {...pageProps} />
                <Analytics />
            </ColorProviderWrapper>

            {/*global indica que vai ser em todas as paginas*/}
            <style global jsx>
                {
                    `

                      #nprogress {
                        position: relative;
                        z-index: 9999999;
                      }

                      #nprogress .bar {
                        background: #959ed6 !important;
                        height: 3px;
                      }
                    `
                }
            </style>

        </CacheProvider>
    );
}