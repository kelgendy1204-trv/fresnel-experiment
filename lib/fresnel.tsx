import { createMedia } from "@artsy/fresnel";
import { MediaContextProviderProps } from "@artsy/fresnel/dist/Media";
import { propKey, createClassName } from "@artsy/fresnel/dist/Utils";
import { FC, useEffect, useState } from "react";
import { MediaProps } from "@artsy/fresnel/dist/Media";
import cn from 'classnames';
import { ReactNode } from "react";

export const media = createMedia({
    breakpoints: {
        sm: 0,
        md: 768,
        lg: 1024,
        xl: 1192,
    },
});

const { MediaContextProvider, Media, createMediaStyle } = media;

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


type PropsWithChildren<P> = P & { children?: ReactNode };
const EnhancedMedia = ({
    children,
    ...rest
}: PropsWithChildren<MediaProps<"sm" | "md" | "lg" | "xl", never>>) => {
    const { className: passedClassName, style, interaction, ...breakpointProps } = rest;
    const [isMounted, setIsMounted] = useState(false);
    const type = propKey(breakpointProps)
    const breakpoint = breakpointProps[type]!
    const className = createClassName(type, breakpoint);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (isMounted) {
        return <Media {...rest}>{children}</Media>;
    }

    return (
        <div
            className={cn('fresnel-container', className, passedClassName)}
            // style={style}
            suppressHydrationWarning={true}
        >
            {children}
        </div>
    );
};

export { MediaContextProvider, Media, EnhancedMediaContextProvider, EnhancedMedia, createMediaStyle };
