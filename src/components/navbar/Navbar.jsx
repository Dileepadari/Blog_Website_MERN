import styles from './navbar.module.css'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/images/facebook.png" alt="facebook" width={24} height={24} />
                <Image src="/images/instagram.png" alt="insta" width={24} height={24} />
                <Image src="/images/youtube.png" alt="Utube" width={24} height={24} />
                </div>
            <div className={styles.logo}>ADK&nbsp;BLOGS</div>
            <ThemeToggle />
            <div className={styles.links}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <AuthLinks />
            </div>
        </div>
    )
}

export default Navbar;