import styles from './cardList.module.css'
import Pagination from '../pagination/Pagination';
import Card from './Card';

const getPosts = async (page, cat) => {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat}`, {cache: "no-store"});
    if(!res.ok){
        throw new Error("Failed to get posts");
    }
    return await res.json();
};

const CardList = async ({page, cat}) => {
    const {posts, count} = await getPosts(page, cat);

    const POST_PER_PAGE = 3;
    const hasPrev = POST_PER_PAGE * (page - 1 ) > 0;
    const hasNext = POST_PER_PAGE * (page - 1 ) + POST_PER_PAGE < count;
    
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Posts</h1>
            <div className={styles.posts}>
                {posts?.map(item => (
                    <Card key={item.id} item={item}/>
                ))}
            </div>
            <Pagination page={page} cat={cat} hasNext={hasNext} hasPrev={hasPrev}/>
        </div>
    )
}

export default CardList;