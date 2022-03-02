import React, { Component } from 'react';
import { MdSentimentNeutral } from "react-icons/md";
import styles from '.././styles/section1.module.css'

class Section1 extends Component {
    state = {
        cardContent: [
            {
                coursename: 'Training Courses',
                content: 'The gradual accumulation of information about atomic and small-scale behaviour...'
            },
            {
                coursename: '2,769 Online Courses',
                content: 'The gradual accumulation of information about atomic and small-scale behaviour...'
            },
            {
                coursename: 'Training Courses',
                content: 'The gradual accumulation of information about atomic and small-scale behaviour...'
            }
        ]
    }
    render() {
        return (
            <div className={styles.section1}>
                <div className={styles.navbar}>
                    <div className={styles.brandname}>
                        <p>Brandname</p>
                    </div>
                    <div className={styles.navitems}>
                        <p>Home</p>
                        <p>Product</p>
                        <p>Pricing</p>
                        <p>Contact</p>
                    </div>
                    <div className={styles.navlogin}>
                        <p>Login</p>
                    </div>
                    <div className={styles.navjoinus}>
                        <button>JOIN US</button>

                    </div>
                </div>
                <div className={styles.welcometext}>
                    <div>
                        <p style={{ color: "#22A6F1" }}>Welcome</p>
                    </div>
                    <div className={styles.insidetext}>
                        <p>Selling on the</p>
                        <p>internet like a pro</p>
                    </div>
                    <div className={styles.downtext}>
                        <p>We know how large objects will act, but things on a</p>
                        <p>small scale just do not act the way.</p>
                    </div>
                    <div className={styles.buttons}>
                        <button type="button" className={styles.btnquote}> Get Quote Now</button>
                        <button type="button" className={styles.btnlearn}> Learn More</button>
                    </div>
                </div>
                <div className={styles.cards}>
                    <div></div>
                    <div className={styles.card1}>
                        <div style={{ height: 40, borderRadius: 10, width: 40, backgroundColor: "#FEDDD1", color: "#E74040", fontWeight: "bold", fontSize: 40, padding: 20 }}>
                            <MdSentimentNeutral />
                        </div>
                        {/* MdSentimentNeutral */}
                        <p style={{ fontWeight: "bold" }}>Training Courses</p>
                        <p style={{ fontWeight: "bold", color: "#E74040" }}>_____</p>

                        <p>The gradual accumulation of information about atomic and small-scale behaviour...</p>
                    </div>
                    <div className={styles.card1}>
                        <p>training courses</p>
                        <p>_____</p>
                        <p>The gradual accumulation of information about atomic and small-scale behaviour...</p>
                    </div>
                    <div className={styles.card1}>
                        <p>training courses</p>
                        <p>The gradual accumulation of information about atomic and small-scale behaviour...</p>
                    </div>

                </div>
                <div>
                    <img src="/images/wallpaper.jpg"></img>
                </div>
            </div >
        );
    }
}

export default Section1;