import Head from "next/head";
import { Atomic_Age } from "next/font/google";
import styles from "@/styles/Home.module.css";

import fresnel from "../lib/fresnel";
import { Desktop, Mobile, Tablet } from "@/components/components";

const atomic_Age = Atomic_Age({ weight: "400", subsets: ["latin"] });

const { MediaContextProvider, Media } = fresnel;

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main} ${atomic_Age.className}`}>
                <MediaContextProvider>
                    <Media at="sm">
                        <Mobile />
                    </Media>
                    <Media at="md">
                        <Tablet />
                    </Media>
                    <Media at="lg">
                        <Desktop />
                    </Media>
                </MediaContextProvider>
            </main>
        </>
    );
}
