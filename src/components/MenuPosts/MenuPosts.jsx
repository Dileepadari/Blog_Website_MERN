import styles from './menuPosts.module.css'
import React from 'react';
import Link from 'next/link'
import Image from 'next/image'


const getPost = async (type) => {
  const res = await fetch(`http://localhost:3000/api/extra?type=${type}`, {cache: "no-store"});

  if(!res.ok){
      throw new Error("Failed to get posts");
  }
  return await res.json();
};


const MenuPosts = async({withImage, type}) =>{

  const {posts} = await getPost(type);

    return (

        <div className={styles.items}>
          {posts?.map((item => (
                    <Link href={`/posts/${item.slug}`} className={styles.item} key={item.id}>
                    {withImage && item.img && (<div className={styles.imgContainer}>
                      <Image src={`/images${item.img}`} alt="img" className={styles.image} fill />
                    </div>)}
                    <div className={styles.txtContainer}>
                      <span className={`${styles.category} ${styles.travel}`}>
                        {item.catSlug}
                      </span>
                      <h3 className={styles.postTitle}>
                        {item.title}
                      </h3>
                      <p className={styles.postDesc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 400) }} />
                      <div className={styles.detail}>
                          <span className={styles.username}>{item.userEmail} </span>
                          <span className={styles.date}> -  {item.createdAt.substring(0, 10)}</span>
                      </div>
                    </div>
                  </Link>)
          ))}
          </div>
    )
}

export default MenuPosts;