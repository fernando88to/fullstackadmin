import type {AppProps} from 'next/app'
import {Inter} from "@next/font/google";

const inter = Inter({subsets: ['latin'], weight: ['400', '600', '700']});
export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <style jsx global>{`
              html, body, #root, .app {
                font-family: ${inter.style.fontFamily}, 'sans-serif';
                height: 100%;
                width: 100%;
              }
            `}</style>
            <Component {...pageProps} />
        </>
    );
}

