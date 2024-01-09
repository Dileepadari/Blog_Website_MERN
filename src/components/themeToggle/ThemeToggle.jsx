"use client"

import styles from './themeToggle.module.css'
import Image from 'next/image';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const ThemeToggle = () => {
    const  {theme, toggle} = useContext(ThemeContext);

    return (
        <div className={styles.container} onClick={toggle} style={theme==="light" ? {background: "#0f172a"} : {background: "#ffffff"} }>
            <Image src="/images/moon.png" alt="moon" width={16} height={16} />
            <div className={styles.ball} style={theme==="light" ?  {right: 2, background: "#ffffff"} : {left: 2, background: "#0f172a"} }></div>
            <Image src="/images/sun.png" alt="sun" width={16} height={16} />

        </div>
    )
}

export default ThemeToggle;