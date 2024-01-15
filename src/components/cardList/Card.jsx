import styles from './card.module.css'
import Link from 'next/link'
import Image from 'next/image'


const Card = ({item}) => {
    var date = new Date(item.createdAt)?.toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
    return (
        <div className={styles.container} key={item.id}>
            {item.img && (
            <div className={styles.imgContainer}>
                <Image src={`/images${item.img}`} alt="image" fill />
            </div>)}
            <div className={styles.txtContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>{date}</span>
                    <span className={styles.category}>{item.catSlug}</span>
                </div>
                <Link href={`/posts/${item.slug}`}>
                <h1>{item.title}</h1>
                </Link>
                <p className={styles.desc} dangerouslySetInnerHTML={{ __html: item.desc.substring(0, 400)} } />
                <Link href={`/posts/${item.slug}`} className={styles.link}>Read More
                </Link>
            </div>
        </div>
    )
}

export default Card;