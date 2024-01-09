import styles from './authLinks.module.css'
import Link from 'next/link';

const AuthLinks = () => {
    const userstatus = "auth";
    return (
        <>
        {userstatus === "noauth" ?
        (
        <Link href="/login">Login</Link>
        ) : (
            <>
            <Link href="/write">Write</Link>
            <span className={styles.link}>Logout</span>
            </>
        )}
        </>
    )
}

export default AuthLinks;