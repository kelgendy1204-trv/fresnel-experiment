import { MediaContextProviderProps } from "@artsy/fresnel/dist/Media";
import fresnel from "../lib/fresnel";
import { FC, useEffect, useState } from "react";

const { MediaContextProvider } = fresnel;

export const EnhancedMediaContextProvider: FC<
    MediaContextProviderProps<"sm" | "md" | "lg" | "xl"> & {
        children: React.ReactNode;
    }
> = ({ children, ...rest }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <MediaContextProvider
            {...rest}
            disableDynamicMediaQueries={!isMounted}
            onlyMatch={isMounted ? undefined : rest.onlyMatch}
        >
            {children}
        </MediaContextProvider>
    );
};
