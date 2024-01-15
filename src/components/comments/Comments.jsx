"use client";

import styles from './comments.module.css'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from "swr"
import { useSession } from 'next-auth/react';
import { useState } from 'react';

const getter = async(url) =>{
    const res = await fetch(url);
    const data = await  res.json();

    if(!res.ok){
        const error = new Error(data.message);
        throw error;
    }
    return data;
}


const Comments = ({postSlug}) => {
    const status = useSession().status;
    const {data, mutate, isLoading} = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, getter)

    const [desc, setDesc] = useState("");

    const handleSubmit = async () =>{
        await fetch("/api/comments",{
            method: "POST",
            body: JSON.stringify({desc, postSlug}),
            headers: {
                "Content-Type": "application/json"
            }
        });
        mutate();
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Comments
            </h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                <textarea name="" placeholder='Write a Comment...' className={styles.input} onChange={e=>setDesc(e.target.value)} />
                <button className={styles.button} onClick={handleSubmit}>Send</button>
            </div>
            ) : (
                <Link href="/login">Login to write a Comment</Link>
            )}
            <div className={styles.comments}>
                {isLoading ? "loading" : data.map(item=> (
                    <div className={styles.comment} key={item.id}>
                    <div className={styles.user}>
                            <Image src={item.user.image} alt="image" width={50} height={50} className={styles.image} />
                            <div className={styles.userInfo}>
                                <span className={styles.username}>{item.user.name}</span>
                                <span className={styles.date}>{new Date(item.createdAt)?.toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}</span>
                        </div>
                    </div>
                    <div className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 400)} } />
                </div>))
                 }
            </div>
        </div>

);
}

export default Comments;