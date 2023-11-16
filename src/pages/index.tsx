import React, { Fragment } from "react";
import Head from "next/head";

import Hero from "@/components/hero/Index";
import InfoCards from "@/components/infoCards/Index";

export default function Home() {
    return (
        <>
            <Head>
                <title>Renovation Estimator</title>
                <meta
                    name="description"
                    content="Estimate the cost of your next project or home with this handy app."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <InfoCards />
        </>
    );
}
