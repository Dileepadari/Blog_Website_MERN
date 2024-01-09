import styles from  './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>
            <div className={styles.categories}>
                <div className={styles.category}>
                    <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
                        <Image src="/images/style.png" alt="alt" width={32} height={32} className={styles.image} />
                        Style
                    </Link>
                </div>
                <div className={styles.category}>
                    <Link href="/blog?cat=fashion" className={`${styles.category} ${styles.fashion}`}>
                        <Image src="/images/fashion.png" alt="alt" width={32} height={32} className={styles.image} />
                        Fashion
                    </Link>
                </div>
                <div className={styles.category}>   
                    <Link href="/blog?cat=food" className={`${styles.category} ${styles.food}`}>
                        <Image src="/images/food.png" alt="alt" width={32} height={32} className={styles.image} />
                        Food
                    </Link>
                </div>
                <div className={styles.category}>
                    <Link href="/blog?cat=travel" className={`${styles.category} ${styles.travel}`}>
                        <Image src="/images/travel.png" alt="alt" width={32} height={32} className={styles.image} />
                        Travel
                    </Link>
                </div>
                <div className={styles.category}>
                    <Link href="/blog?cat=culture" className={`${styles.category} ${styles.culture}`}>
                        <Image src="/images/style.png" alt="alt" width={32} height={32} className={styles.image} />
                        Culture
                    </Link>
                </div>
                <div className={styles.category}>
                    <Link href="/blog?cat=culture" className={`${styles.category} ${styles.coding}`}>
                        <Image src="/images/style.png" alt="alt" width={32} height={32} className={styles.image} />
                        Coding
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CategoryList;