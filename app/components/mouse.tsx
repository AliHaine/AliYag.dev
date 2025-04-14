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

        const mouseLeave = () => {
            cursor.hidden = true;
        }

        const mouseEnter = () => {
            cursor.hidden = false;
        }

        document.addEventListener("mousemove", moveCursor);
        document.addEventListener("mouseleave", mouseLeave);
        document.addEventListener("mouseenter", mouseEnter);



        return () => {
            document.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mouseleave", mouseLeave);
            document.removeEventListener("mouseenter", mouseLeave);
            document.body.removeChild(cursor);
        };
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    return null;
}