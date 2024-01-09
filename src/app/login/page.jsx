import styles from './login.module.css'

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1 className={styles.title}>Login</h1>
                <form action="" className={styles.form}>
                    <input type="text" placeholder="Username" className={styles.input} />
                    <input type="password" placeholder="Password" className={styles.input} />
                    <button className={styles.button}>Login</button>
                </form>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.separator}>OR</div>
                <div className={styles.socialButton}>Sign in with Google.</div>
                <div className={styles.socialButton}>Sign in with Github.</div>
                <div className={styles.socialButton}>Sign in with Facebook.</div>
            </div>
        </div>
    );
}

export default Login;