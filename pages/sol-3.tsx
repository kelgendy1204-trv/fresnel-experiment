import Head from "next/head";
import { Atomic_Age } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { EnhancedMedia, MediaContextProvider } from "../lib/fresnel";
import { Desktop, Mobile, SomeComponent, Tablet } from "@/components/components";

const atomic_Age = Atomic_Age({ weight: "400", subsets: ["latin"] });

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
                    Media Wrapper
                    <SomeComponent />
                    <EnhancedMedia at="sm">
                        <Mobile />
                    </EnhancedMedia>
                    <EnhancedMedia at="md">
                        <Tablet />
                    </EnhancedMedia>
                    <EnhancedMedia at="lg">
                        <Desktop />
                    </EnhancedMedia>
                </MediaContextProvider>
            </main>
        </>
    );
}
