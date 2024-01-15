import React from "react";
import Image from 'next/image'
import styles from  './about.module.css'

const About = () => {
    return (
    <div>
    <div className={styles.slogan}>
        <h1>Blogs Makes Your Life Beautiful</h1>    
    </div>
    <br /><br /><br />
    <hr />
    <br /><br />
    <p className={styles.missionTxt}>-Our Task-</p>
    <p className={styles.missionTxt}>To provide Most accurate Informative Blogs</p>
    <br /><br />
    <h1 className={styles.missionTxt}>About</h1>
    <p className={styles.aboutTxt}>
        Welcome to ADKBlogs, a website dedicated to providing honest and insightful Blogs and  reviews. 

We welcome feedback and suggestions from our readers, and we encourage you to get in touch with us if you have any questions or comments. Thank you for visiting ADKBlogs, and we hope you enjoy reading our Blogs and discovering new content with us.    
    </p>
    <hr />
    <br /><br /><br />
    <ul className={styles.webUse}>
        <h2>How to Use:</h2>
        <br />
        <li>The Website ADKBlogs is Designed for Posting blogs and reading them.</li>
        <li>The user without logging in can only read the blogs.</li>
        <li>Inorder to post blogs he needs to login and post the blogs in write page.</li>
        <li>The logged user can also write comments to the existing blogs.</li>
    </ul>
    <br /><br /><br />
    <hr />
    <h1 className={styles.creator}>Creator:</h1>
    <div className={styles.totalContainer} id="credits">
        <div className={styles.meImgContainer}>
            <Image src="/images/delhi.jpeg" alt="alt" width={360} height={360} />
            <div className={styles.about}>
                <p>Hi I&apos;m Dileepkumar
                <br /><br />
                I&apos;m from visakhapatnam, A.P and I&apos;m Currently a 2nd year student of IIIT Hyderabad studying Computer Science.
                </p>
                <br /><br />
                Contact : <a href="mailto:dileepkumar.adari@students.iiit.ac.in">dileepkumar.adari@students.iiit.ac.in</a>
                <br /><br />
                <h3>Education:</h3>
                <div className={styles.education}>
                    <h5>10th</h5>
                    <h5>Prasanthi Nikethan MVVS Murthy Eng Med School</h5>
                </div>
                <div className={styles.education}>
                    <h5>12th</h5>
                    <h5>Rajiv Gandhi University of Knowledge Technologies</h5>
                </div>
                <div className={styles.education}>
                    <h5>B-Tech</h5>
                    <h5>IIIT Hyderabad</h5>
                </div>
                <br /><br />
                <h3>skills</h3>
                <br />
                <div className={styles.education}>
                    <h5>MERN</h5>
                    <h5><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>
                    </h5>
                </div>
                <div className={styles.education}>
                    <h5>CSS</h5>
                    <h5><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>
                    </h5>
                </div>
                <div className={styles.education}>
                    <h5>NEXT.js</h5>
                    <h5><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>
                    </h5>
                </div>
                <div className={styles.education}>
                    <h5>PHP</h5>
                    <h5><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>
                    </h5>
                </div>
                <div className={styles.education}>
                    <h5>C</h5>
                    <h5><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>
                    </h5>
                </div>
                <br /><br />
                <h3>Reach Out</h3>
                <br />
                <div className={styles.education}>
                    <h5>GitHub</h5>
                    <h5><a href="https://github.com/Dileepadari" target="_blank">Dileepadari</a>
                    </h5>
                </div>
                <div className={styles.education}>
                    <h5>Instagram</h5>
                    <h5><a href="https://www.instagram.com/dileepadari/" target="_blank">@delhi</a>
                    </h5>
                </div>
                <div className={styles.education}>
                    <h5>Linkedin</h5>
                    <h5><a href="https://www.linkedin.com/in/dileep-kumar-adari-298169252/" target="_blank">Dileepkumar</a>
                    </h5>
                </div>
            </div>
        </div>
    </div>
    </div>
    
    );
}

export default About;