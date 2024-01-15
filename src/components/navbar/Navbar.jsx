import styles from './navbar.module.css'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';
import { FaFacebook } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link className={styles.logo} href="/">ADK&nbsp;BLOGS</Link>
            <div className={styles.links}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <AuthLinks />
                <ThemeToggle />
            </div>
            <div className={styles.social}>
                <a href='https://www.facebook.com/dileep.adari' target='_blank' ><FaFacebook className={styles.socialicons1} /></a>
                <a href='https://www.instagram.com/dileepadari/' target='_blank'><PiInstagramLogoFill className={styles.socialicons2} /></a>
                <a href='https://www.linkedin.com/in/dileep-kumar-adari-298169252/' target='_blank'><FaLinkedin className={styles.socialicons3} /></a>
            </div>
        </div>
    )
}

export default Navbar;