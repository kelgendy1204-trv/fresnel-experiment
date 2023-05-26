import { useEffect, memo } from "react";

export const Desktop = memo(() => {
    useEffect(() => {
        console.log('Desktop rendered!');
    }, []);

    return (
        <>Desktop</>
    );
});

Desktop.displayName = 'Desktop';

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
