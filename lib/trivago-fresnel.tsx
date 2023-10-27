import { createMedia } from "@trivago/fresnel";
import { MediaContextProviderProps } from "@artsy/fresnel/dist/Media";
import { FC, useEffect, useState } from "react";

export const media = createMedia({
    breakpoints: {
        sm: 0,
        md: 768,
        lg: 1024,
        xl: 1192,
    },
});

const { MediaContextProvider, Media } = media;

const EnhancedMediaContextProvider: FC<
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

export { EnhancedMediaContextProvider, Media };
