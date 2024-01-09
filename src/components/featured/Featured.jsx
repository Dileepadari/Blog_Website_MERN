import styles from './featured.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Featured = () =>{
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey Delhi here!</b> These are some stories and creative ideas.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/images/p1.jpeg" alt="image" fill />
                </div>
                <div className={styles.txtContainer}>
                    <h1 className={styles.postTitle}>
                        <Link href={""}>Lorem ipsum dolor sit amet.</Link>
                    </h1>
                    <p className={styles.postDesc}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam cupiditate placeat temporibus minima, hic quidem dicta laboriosam sunt quaerat eligendi ipsum saepe suscipit dolores voluptatem ratione, reiciendis illum beatae? Expedita quas officia optio recusandae quos eveniet obcaecati itaque error velit! Recusandae enim ipsum at laudantium rerum dicta aliquam nobis unde dolores! Expedita doloribus blanditiis corrupti similique in beatae a animi.
                    </p>
                    <button className={styles.button}>Read more</button>
                </div>
            </div>
        </div>
    );
}

export default Featured;