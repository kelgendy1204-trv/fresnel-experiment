import { useEffect } from "react";

export const Desktop = () => {
    useEffect(() => {
        console.log('Desktop rendered!');
    }, []);

    return (
        <>Desktop</>
    );
};

export const Tablet = () => {
    useEffect(() => {
        console.log('Tablet rendered!');
    }, []);

    return (
        <>Tablet</>
    );
};

export const Mobile = () => {
    useEffect(() => {
        console.log('Mobile rendered!');
    }, []);

    return (
        <>Mobile</>
    );
};
