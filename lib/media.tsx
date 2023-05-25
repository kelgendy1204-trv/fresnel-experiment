import { MediaProps } from "@artsy/fresnel/dist/Media";
import { propKey, createClassName } from "@artsy/fresnel/dist/Utils";
import fresnel from "../lib/fresnel";
import { useEffect, useState } from "react";
import cn from 'classnames';
import { ReactNode } from "react";

const { Media } = fresnel;

type PropsWithChildren<P> = P & { children?: ReactNode };

export const EnhancedMedia = ({
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
