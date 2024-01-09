import Menu from '@/components/Menu/Menu'
import Image from 'next/image'
import styles from './singlePage.module.css'
import Comments from '@/components/comments/Comments'

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.txtContainer}>
                    <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <div className={styles.user}>
                        <div className={styles.avatar}>
                            <Image src="/images/p1.jpeg" alt="image" width={50} height={50} className={styles.avatar} />
                        </div>
                        <div className={styles.userTxtContainer}>
                            <span className={styles.username}>Delhiking</span>
                            <span className={styles.date}>10.01.2024</span>
                        </div>
                    </div>
                </div>
                    <div className={styles.imgContainer}>
                        <Image src="/images/p1.jpeg" alt="image" fill className={styles.image} />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.post}>
                        <div className={styles.description}>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum modi odit et. Iusto voluptate voluptatum deserunt, saepe officiis hic.</p>
                            <h2>Lorem ipsum dolor sit amet.</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos voluptatem ipsum, consequatur odit molestiae hic nam harum fugiat quam ratione.</p>
                        </div>
                        <div className={styles.comments}>
                            <Comments />
                        </div>
                    </div>
                    <Menu />
                </div>
            </div>
);
}

export default SinglePage;