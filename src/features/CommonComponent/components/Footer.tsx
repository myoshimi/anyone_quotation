'use client';

import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul>
                <li>利用規約</li>
                <li>はじめての方へ・ご利用の流れ</li>
                <li>プライバシーポリシー</li>
                <li>会社概要</li>
            </ul>
        </footer>
    );
};
