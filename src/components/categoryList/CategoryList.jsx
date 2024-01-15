import styles from  './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'


const getCategories = async () => {
        const res = await fetch("http://localhost:3000/api/categories", {cache: "no-store"});
        if(!res.ok){
            throw new Error("Failed to get categories");
        }
        return await res.json();
};

const CategoryList = async () =>{
    const data = await getCategories();
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>
            <div className={styles.categories}>
                {data?.map(item => (
                    <div className={styles.category} key={item.id}>
                        <Link href={`/blog?cat=${item.slug}`} className={`${styles.category} ${styles[item.slug]}`}>
                        {item.img && <Image src={`/images/${item.slug}.png`} alt="alt" width={32} height={32} className={styles.image} />}
                        {item.title}
                    </Link>
                    </div>
                    ))
                }
            </div>
        </div>
    )
};

export default CategoryList;