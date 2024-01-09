import styles from './comments.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Comments = () => {
    const status = "authenticated";
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Comments
            </h1>
            {status === "authenticated" ? (
            <div className={styles.write}>
                <textarea name="" placeholder='Write a Comment...' className={styles.input} />
                <button className={styles.button}>Send</button>
            </div>
            ) : (
            <Link href="/login">Login to write a Comment</Link>
            )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                            <Image src="/images/p1.jpeg" alt="image" width={50} height={50} className={styles.image} />
                            <div className={styles.userInfo}>
                                <span className={styles.username}>Delhiking</span>
                                <span className={styles.date}>10.01.2024</span>
                        </div>
                    </div>
                    <div className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, molestiae. Totam ducimus nulla beatae iure, tempore adipisci consectetur est quia commodi deserunt? Est, totam harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestias eius incidunt sapiente cumque architecto harum nostrum ipsa asperiores perferendis! Aliquid, nesciunt perspiciatis. Officiis quos quae, iusto earum tempore quo. Voluptatum, rem veritatis? Nihil.
                    </div>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                            <Image src="/images/p1.jpeg" alt="image" width={50} height={50} className={styles.image} />
                            <div className={styles.userInfo}>
                                <span className={styles.username}>Delhiking</span>
                                <span className={styles.date}>10.01.2024</span>
                        </div>
                    </div>
                    <div className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, molestiae. Totam ducimus nulla beatae iure, tempore adipisci consectetur est quia commodi deserunt? Est, totam harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestias eius incidunt sapiente cumque architecto harum nostrum ipsa asperiores perferendis! Aliquid, nesciunt perspiciatis. Officiis quos quae, iusto earum tempore quo. Voluptatum, rem veritatis? Nihil.
                    </div>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                            <Image src="/images/p1.jpeg" alt="image" width={50} height={50} className={styles.image} />
                            <div className={styles.userInfo}>
                                <span className={styles.username}>Delhiking</span>
                                <span className={styles.date}>10.01.2024</span>
                        </div>
                    </div>
                    <div className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, molestiae. Totam ducimus nulla beatae iure, tempore adipisci consectetur est quia commodi deserunt? Est, totam harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestias eius incidunt sapiente cumque architecto harum nostrum ipsa asperiores perferendis! Aliquid, nesciunt perspiciatis. Officiis quos quae, iusto earum tempore quo. Voluptatum, rem veritatis? Nihil.
                    </div>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                            <Image src="/images/p1.jpeg" alt="image" width={50} height={50} className={styles.image} />
                            <div className={styles.userInfo}>
                                <span className={styles.username}>Delhiking</span>
                                <span className={styles.date}>10.01.2024</span>
                        </div>
                    </div>
                    <div className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, molestiae. Totam ducimus nulla beatae iure, tempore adipisci consectetur est quia commodi deserunt? Est, totam harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestias eius incidunt sapiente cumque architecto harum nostrum ipsa asperiores perferendis! Aliquid, nesciunt perspiciatis. Officiis quos quae, iusto earum tempore quo. Voluptatum, rem veritatis? Nihil.
                    </div>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                            <Image src="/images/p1.jpeg" alt="image" width={50} height={50} className={styles.image} />
                            <div className={styles.userInfo}>
                                <span className={styles.username}>Delhiking</span>
                                <span className={styles.date}>10.01.2024</span>
                        </div>
                    </div>
                    <div className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, molestiae. Totam ducimus nulla beatae iure, tempore adipisci consectetur est quia commodi deserunt? Est, totam harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestias eius incidunt sapiente cumque architecto harum nostrum ipsa asperiores perferendis! Aliquid, nesciunt perspiciatis. Officiis quos quae, iusto earum tempore quo. Voluptatum, rem veritatis? Nihil.
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Comments;