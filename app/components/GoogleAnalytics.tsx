"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import ReactGA from "react-ga4";

/*
 * Basic Google Analytics integration with React (Only for view page)
 */
export default function GoogleAnalytics() {
    const pathname = usePathname();

    useEffect(() => {
        ReactGA.initialize("G-RFSFPM623P");
    }, []);

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: pathname });
    }, [pathname]);

    return null;
}