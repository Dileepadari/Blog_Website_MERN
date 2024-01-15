import styles from './featured.module.css'
import Link from 'next/link'
import Image from 'next/image'


const getPost = async (type) => {
    const res = await fetch(`http://localhost:3000/api/extra?type=${type}`, {cache: "no-store"});

    if(!res.ok){
        throw new Error("Failed to get posts");
    }
    return await res.json();
};


const Featured = async() =>{
    const type = "featured";
    
    const {posts} = await getPost(type);
    if(!posts){
        return <h1>No posts yet</h1>
    }
    return(
            <div className={styles.container} key={posts[0].id}>
            <h1 className={styles.title}>
                <b>Hey User! </b>Welcome to Delhi Blogs. These are some stories and creative ideas.
            </h1>
            <div className={styles.post}>
                
                {posts &&  posts[0].img &&   (
                <div className={styles.imgContainer}>
                    <Image src={`/images${posts[0].img}`} alt="image" fill />
                </div>)
                }
                <div className={styles.txtContainer}>
                    <h1 className={styles.postTitle}>
                        <Link href={`/posts/${posts[0].slug}`}>{posts[0].title}</Link>
                    </h1>
                    <p className={styles.postDesc} dangerouslySetInnerHTML={{ __html: posts ? posts[0]?.desc.substring(0, 400) : "" }} />
                    <Link href={`/posts/${posts[0].slug}`} className={styles.button} >Read more</Link>
                </div>
            </div>
        </div>
    );
}

export default Featured;