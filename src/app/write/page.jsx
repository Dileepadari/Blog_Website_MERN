"use client";
import { useState } from 'react';
import styles from './write.module.css'
import Image from 'next/image'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.bubble.css"
import { FaPlus } from "react-icons/fa6";
import { CiImageOn } from "react-icons/ci";
import { GoLinkExternal } from "react-icons/go";
import { RiVideoAddFill } from "react-icons/ri";



const Write = () => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("");
    return (
        <div className={styles.container}>
            <input type="text" placeholder='Title' className={styles.input} onFocus={() => setOpen(false)}/>
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <FaPlus />
                </button>
                {open &&
                (
                    <div className={styles.add}>
                        <button className={styles.addButton}>
                            <CiImageOn />
                        </button>
                        <button className={styles.addButton}>
                            <GoLinkExternal />
                        </button>
                        <button className={styles.addButton}>
                            <RiVideoAddFill />
                        </button>
                    </div>
                )}
                <ReactQuill theme="bubble" value={value} className={styles.textArea} onChange={setValue} placeholder="Tell your story.." />
            </div>
                <button className={styles.publish}>Publish</button>
        </div>
    );
}

export default Write;