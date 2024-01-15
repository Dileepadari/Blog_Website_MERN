"use client";
import { signIn, useSession } from 'next-auth/react';
import styles from './login.module.css'
import { useRouter } from 'next/navigation';

const Login = () => {


    const router = useRouter();
    const {data, status} = useSession();

    if(status === "authenticated"){
        router.push("/");
    }
    if(status === "loading"){
        return(<div className={styles.loading}>Loading...</div>);
    }


    return (
        <div className={styles.container}>
            {/* <div className={styles.formContainer}>
                <h1 className={styles.title}>Login</h1>
                <form action="" className={styles.form}>
                    <input type="text" placeholder="Username" className={styles.input} />
                    <input type="password" placeholder="Password" className={styles.input} />
                    <button className={styles.button}>Login</button>
                </form>
            </div> */}
            <div className={styles.wrapper}>
                {/* <div className={styles.separator}>OR</div> */}
                <div className={styles.socialButton} onClick={() => signIn("google")}>Sign in with Google.</div>
                <div className={styles.socialButton} onClick={() => signIn("github")}>Sign in with Github.</div>
                <div className={styles.socialButton} onClick={() => signIn("facebook")}>Sign in with Facebook.</div>
            </div>
        </div>
    );
}

export default Login;