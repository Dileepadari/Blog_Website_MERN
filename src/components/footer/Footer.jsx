import styles from './footer.module.css'
import Image from  'next/image'
import Link from 'next/link'
import { FaFacebook } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
            <div className={styles.logo}>
                <Image src="/images/profile.png" alt="alt" width={50} height={50} className={styles.proImage} />
                <h1 className={styles.logoText}>ADKblogs</h1>
            </div>
            <p className={styles.desc}>
                In every blog post, there is an opportunity to inspire, inform, or ignite a conversation. Embrace the power of words and let your thoughts resonate with the world.            </p>
            <div className={styles.social}>
                <a href='https://www.facebook.com/dileep.adari' target='_blank' ><FaFacebook className={styles.socialicons1} /></a>
                <a href='https://www.instagram.com/dileepadari/' target='_blank'><PiInstagramLogoFill className={styles.socialicons2} /></a>
                <a href='https://www.linkedin.com/in/dileep-kumar-adari-298169252/' target='_blank'><FaLinkedin className={styles.socialicons3} /></a>
            </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/">Homepage</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href="/blog?cat=style">Style</Link>
                    <Link href="/blog?cat=fashion">Fashion</Link>
                    <Link href="/blog?cat=coding">Coding</Link>
                    <Link href="/blog?cat=travel">Travel</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href="https://www.facebook.com/dileep.adari" target='_blank'>Facebook</Link>
                    <Link href="https://www.instagram.com/dileepadari/" target='_blank'>Instagram</Link>
                    <Link href="https://www.linkedin.com/in/dileep-kumar-adari-298169252/" target='_blank'>Linkedln</Link>
                    <Link href="https://www.youtube.com/channel/UCi5zNthz3a2iOa0VVy3QH8Q" target='_blank'>Youtube</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;