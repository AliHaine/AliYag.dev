"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import ReactGA from "react-ga4";

export default function GoogleAnalytics() {
    const pathname = usePathname();

    useEffect(() => {
        ReactGA.initialize("G-RFSFPM623P"); // Replace with your GA4 ID
    }, []);

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: pathname });
    }, [pathname]);

    return null;
}