'use client';

import { useEffect } from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
    useEffect(() => {
        const footer = document.querySelector(`.${styles.footer}`) as HTMLElement;
        if (footer) {
            document.body.style.paddingBottom = `${footer.offsetHeight}px`;
        }
    }, []);

    return (
        <footer className={styles.footer}>
            <ul>
                <li>利用規約</li>
                <li>はじめての方へ・ご利用の流れ</li>
                <li>プライバシーポリシー</li>
                <li>会社概要</li>
                <li>お問い合わせ</li>
                <li>管理用</li>
            </ul>
        </footer>
    );
};
