import React, { Fragment } from "react";
import Head from "next/head";
import styled from "styled-components";
import { Inter } from "next/font/google";
import Link from "next/link";

import Modal from "@/subComponents/Modal";

const inter = Inter({ subsets: ["latin"] });

const HomeCont = styled.main`
    height: 1000px;
    padding: 40px 0;
`;

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
            <HomeCont></HomeCont>
        </>
    );
}
