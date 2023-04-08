import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/merriweather-sans";
import "@fontsource/dancing-script";
export default function App({ Component, pageProps }: AppProps) {
    const theme = extendTheme({
        fonts: {
            primary: 'Merriweather Sans',
            secondary: 'Dancing Script'
        }
    })
    return (
        <>
        <SessionProvider session={pageProps.session}>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
            </SessionProvider>
        </>
    );
}
