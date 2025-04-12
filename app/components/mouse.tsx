'use client'

import { useEffect } from "react";

export default function Mouse() {
    useEffect(() => {
        const cursor = document.createElement("div");
        cursor.id = "cursor";
        document.body.appendChild(cursor);

        const moveCursor = (e: MouseEvent) => {
            cursor.style.left = `${e.clientX - 8}px`;
            cursor.style.top = `${e.clientY - 8}px`;
        };

        document.addEventListener("mousemove", moveCursor);

        return () => {
            document.removeEventListener("mousemove", moveCursor);
            document.body.removeChild(cursor);
        };
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    return null;
}