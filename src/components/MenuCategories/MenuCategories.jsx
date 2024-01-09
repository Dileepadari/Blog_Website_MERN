import styles from './menuCategories.module.css'
import Link from 'next/link'

const MenuCategories = () => {
    return (
            <div className={styles.categoryList}>
                <div className={styles.categoryItem}>
                    <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.style}`}>
                        Style
                    </Link>
                </div>
                <div className={styles.categoryItem}>
                    <Link href="/blog?cat=fashion" className={`${styles.categoryItem} ${styles.fashion}`}>
                        Fashion
                    </Link>
                </div>
                <div className={styles.categoryItem}>   
                    <Link href="/blog?cat=food" className={`${styles.categoryItem} ${styles.food}`}>
                        Food
                    </Link>
                </div>
                <div className={styles.categoryItem}>
                    <Link href="/blog?cat=travel" className={`${styles.categoryItem} ${styles.travel}`}>
                        Travel
                    </Link>
                </div>
                <div className={styles.categoryItem}>
                    <Link href="/blog?cat=culture" className={`${styles.categoryItem} ${styles.culture}`}>
                        Culture
                    </Link>
                </div>
                <div className={styles.categoryItem}>
                    <Link href="/blog?cat=coding" className={`${styles.categoryItem} ${styles.coding}`}>
                        Coding
                    </Link>
                </div>
            </div>
    )
}

export default MenuCategories;