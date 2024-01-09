import styles from './footer.module.css'
import Image from  'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
            <div className={styles.logo}>
                <Image src="/images/logo.png" alt="alt" width={50} height={50} />
                <h1 className={styles.logoText}>ADKblogs</h1>
            </div>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae id ullam enim omnis totam perferendis quod dicta sit fuga accusamus sequi, modi velit, nulla incidunt, saepe ex maiores vitae nam.
            </p>
            <div className={styles.icons}>
                <Image src="/images/facebook.png" alt="facebook" width={18} height={18} />
                <Image src="/images/instagram.png" alt="instagram" width={18} height={18} />
                <Image src="/images/youtube.png" alt="youtube" width={18} height={18} />
            </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/">Homepage</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href="/">Style</Link>
                    <Link href="/">Fashion</Link>
                    <Link href="/">Coding</Link>
                    <Link href="/">Travel</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href="/">Facebook</Link>
                    <Link href="/">Instagram</Link>
                    <Link href="/">Tiktok</Link>
                    <Link href="/">Youtube</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;