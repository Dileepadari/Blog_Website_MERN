"use client";
// import { useState } from 'react';
// import styles from './write.module.css'
// import Image from 'next/image'
// import ReactQuill from 'react-quill'
// import 'react-quill/dist/quill.bubble.css';
// import { FaPlus } from "react-icons/fa6";
// import { CiImageOn } from "react-icons/ci";
// import { GoLinkExternal } from "react-icons/go";
// import { RiVideoAddFill } from "react-icons/ri";
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';



const Write = () => {
    return (
        <h1>Under Construction</h1>
    );
    // const [open, setOpen] = useState(false)
    // const [value, setValue] = useState("");
    // const [title, setTitle] = useState("");
    // const [category, setCategory] = useState("fashion");
    // const [file, setFile] = useState(null);

    // const router = useRouter();
    // const { status } = useSession();


    // if(status === "unauthenticated"){
    //     router.push("/");
    // }
    // if(status === "loading"){
    //     return(<div className={styles.loading}>Loading...</div>);
    // }

    // const editSlug = (str) =>{
    //     return str.toLowerCase()
    //     .replace(/ /g,'-')
    //     .replace(/[^\w-]+/g,"")
    //     .replace(/^-+|-+s/g, "");
    // }

    // const handleSubmit = async () =>{
    //     console.log(file)
    //     const data = new FormData();
    //     data.set('img', file);
    //     data.set('title', title);
    //     data.set('slug', editSlug(title));
    //     data.set('desc', value);
    //     data.set('catSlug', category);
    
    //     await fetch("/api/posts",{
    //         method: "POST",
    //         body: data,
    //     });
    //     router.push("/");
    // }

    // return (
    //     <div className={styles.container}>
    //         <div className={styles.flex}>
    //         <input type="text" placeholder='Title' required onChange={(e)=> setTitle(e.target.value)} className={styles.input} onFocus={() => setOpen(false)}/>
    //         <select name="categories" id={styles.categories} onChange={(e)=> setCategory(e.target.value)} required>
    //             <option value="fashion">Fashion</option>
    //             <option value="coding">coding</option>
    //             <option value="food">Food</option>
    //             <option value="culture">Culture</option>
    //             <option value="style">Style</option>
    //             <option value="travel">Travel</option>
    //         </select>
    //         </div>
    //         <div className={styles.editor}>
    //             <button className={styles.button} onClick={() => setOpen(!open)}>
    //                 <FaPlus />
    //             </button>
    //             {open &&
    //             (
    //                 <div className={styles.add}>
    //                     <input type="file" accept="image/png, image/gif, image/jpeg, image/jpg" id='image' onChange={(e) => setFile(e.target.files[0])} style={{display: "none"}} />
    //                     <label htmlFor='image' className={styles.addButton} >
    //                         <CiImageOn />
    //                     </label>
    //                     {/* <input type="file" accept="image/png, image/gif, image/jpeg, image/jpg" id='multim' onChange={(e) => setFile(e.target.files[0])} style={{display: "none"}} /> */}
    //                     <label className={styles.addButton}>
    //                         <GoLinkExternal />
    //                     </label>
                        
    //                     <input type="file" accept="video/mp4, video/mkv, video/vid, video/mp3" id='video' onChange={(e) => setFile(e.target.files[0])} style={{display: "none"}} />
    //                     <label className={styles.addButton} htmlFor='video'>
    //                         <RiVideoAddFill />
    //                     </label>
    //                 </div>
    //             )}
    //             {/* {file ? (<Image src={file} alt="" />) : (<div></div>)} */}
    //             <ReactQuill theme="bubble" value={value} className={styles.textArea} onChange={setValue} placeholder="Tell your story.." />
    //         </div>
    //             <button className={styles.publish} onClick={handleSubmit}>Publish</button>
    //     </div>
    // );
}

export default Write;