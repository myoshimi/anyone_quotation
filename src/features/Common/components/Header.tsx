'use client';

import { useEffect } from 'react';
import styles from './Header.module.css';

export const Header = () => {
    useEffect(() => {
        const header = document.querySelector(`.${styles.header}`) as HTMLElement | null;
        if (header) {
            document.body.style.marginTop = `${header.offsetHeight}px`;
        }
    }, []);

    return (
        <header className={styles.header}>
            <h1> 街の発明家向け見積もりサイト(仮)</h1>
        </header>
    );
};
