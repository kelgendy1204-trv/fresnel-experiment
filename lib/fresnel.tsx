import { createMedia } from "@artsy/fresnel";

const media = createMedia({
    breakpoints: {
        sm: 0,
        md: 768,
        lg: 1024,
        xl: 1192,
    },
});

export default media;
