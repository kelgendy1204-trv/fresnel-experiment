import { createMedia } from "@artsy/fresnel-new";

export const media = createMedia({
    breakpoints: {
        sm: 0,
        md: 768,
        lg: 1024,
        xl: 1192,
    },
});

export const { MediaContextProvider, Media, createMediaStyle } = media;
