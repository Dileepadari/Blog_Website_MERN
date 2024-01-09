import styles from './card.module.css'
import Link from 'next/link'
import Image from 'next/image'


const Card = ({blog}) => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/images/p1.jpeg" alt="image" fill />
            </div>
            <div className={styles.txtContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>09/01/2024</span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                <h1>Lorem ipsum dolor sit amet .</h1>
                </Link>
                <p className={styles.desc}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam cupiditate placeat temporibus minima, hic quidem dicta laboriosam sunt quaerat eligendi ipsum saepe suscipit dolores voluptatem ratione, reiciendis illum beatae? Expedita quas officia optio recusandae quos eveniet obcaecati itaque error velit! Recusandae enim ipsum at laudantium rerum dicta aliquam nobis unde dolores! Expedita doloribus blanditiis corrupti similique in beatae a animi.
                </p>
                <Link href="/" className={styles.link}>Read More
                </Link>
            </div>
        </div>
    )
}

export default Card;