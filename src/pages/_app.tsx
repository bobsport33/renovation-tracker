import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import Layout from "@/components/Layout";
import GlobalStyles from "@/styles/GlobalStyles";

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps) {
    return (
        <SessionProvider session={session}>
            <Layout>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,700&family=Poppins:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
                <GlobalStyles />
                <Component {...pageProps} />
            </Layout>
        </SessionProvider>
    );
}
