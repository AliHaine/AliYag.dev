'use client'

import {useState} from "react";
import styles from "./mainbuttons.module.css";

export default function MainButtons() {
    const [active, setActive] = useState<'projects' | 'blogs'>('projects');

    return (
        <div>
            <button
                onClick={() => setActive('projects')}
                disabled={active === 'projects'}
                className={`${styles.mainButtons} ${styles.leftMainButton}`}>Projects
            </button>
            <button
                onClick={() => setActive('blogs')}
                disabled={active === 'blogs'}
                className={`${styles.mainButtons} ${styles.rightMainButton}`}>Blogs
            </button>
        </div>
    );
}