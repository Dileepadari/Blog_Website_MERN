"use client";
import { useSession, signOut } from 'next-auth/react';
import styles from './authLinks.module.css'
import Link from 'next/link';

const AuthLinks = () => {

    const {data, status} = useSession();
    return (
        <>
        {status === "unauthenticated" ?
        (
        <Link href="/login" className={styles.link}>Login</Link>
        ) : (
            <>
            <Link href="/profile">Profile</Link>
            <Link href="/write" className={styles.link}>Write</Link>
            <span className={styles.link} onClick={() => signOut()} >Logout</span>
            </>
        )}
        </>
    )
}

export default AuthLinks;