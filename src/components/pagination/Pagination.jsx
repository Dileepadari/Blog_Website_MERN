"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './pagination.module.css'

const Pagination = ({ page, cat,  hasNext, hasPrev }) => {

    const router = useRouter();
    const category = (cat ?  "&cat="+cat : "");

    return (
        <div className={styles.container}>
            <button className={styles.button} disabled={!hasPrev} onClick={()=> router.push(`?page=${page - 1}${category}`)}>Previous</button>
            <button className={styles.button} disabled={!hasNext} onClick={()=> router.push(`?page=${page + 1}${category}`)}>Next</button>
        </div>
    )
}

export default Pagination;