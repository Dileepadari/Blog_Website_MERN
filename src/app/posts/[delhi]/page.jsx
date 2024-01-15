import Menu from '@/components/Menu/Menu'
import Image from 'next/image'
import styles from './singlePage.module.css'
import Comments from '@/components/comments/Comments'


const getPost = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {cache: "no-store"});
    if(!res.ok){
        throw new Error("Failed to get posts");
    }
    return await res.json();
};


const SinglePage = async({params}) => {
    const { delhi } = params;
    
    const post = await getPost(delhi);
    
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.txtContainer}>
                    <h1 className={styles.title}>{post.title    }</h1>
                    <div className={styles.user}>
                        {post?.user.image && 
                        <div className={styles.avatar}>
                            <Image src={`${post?.user.image}`} alt="" width={50} height={50} className={styles.avatar} />
                        </div>}
                        <div className={styles.userTxtContainer}>
                            <span className={styles.username}>{post?.user.name}</span>
                            <span className={styles.date}>10.01.2024</span>
                        </div>
                    </div>
                </div>
                {post?.img &&
                    <div className={styles.imgContainer}>
                        <Image src={`/images${post.img}`} alt="" fill className={styles.image} />
                    </div>}
                </div>
                <div className={styles.content}>
                    <div className={styles.post}>
                        <div className={styles.description} dangerouslySetInnerHTML={{ __html: post ? post?.desc : ""}} />
                        <div className={styles.comments}>
                            <Comments postSlug={delhi}/>
                        </div>
                    </div>
                    <Menu />
                </div>
            </div>
);
}

export default SinglePage;