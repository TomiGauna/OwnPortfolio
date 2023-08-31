import React from 'react';
import ProfilePic from '../../assets/aboutmephoto640.jpg'
import { PiLightbulbDuotone } from 'react-icons/pi';
import { GiBrain } from 'react-icons/gi';
import { GiMountainClimbing } from 'react-icons/gi';
import styles from '../AboutMe/Aboutme.module.css'

const AboutMe = () => {
  return (
    <div id='aboutme' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>About Me</h1>
        <div className={styles.about__container}>
            <div className={styles.aboutme}>
                <div className={styles.about__meimage}>
                    <img src={ProfilePic} alt="/" />
                </div>
            </div>
            <div className={styles.about__content}>
                <div className={styles.about__cards}>
                    <article className={styles.about__card}>
                        <PiLightbulbDuotone className={styles.about__icon}/>
                        <h5>Self-taught</h5>
                    </article>
                    <article className={styles.about__card}>
                        <GiBrain className={styles.about__icon}/>
                        <h5>Disciplined</h5>
                    </article>
                    <article className={styles.about__card}>
                        <GiMountainClimbing className={styles.about__icon}/>
                        <h5>Persistent</h5>
                    </article>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, sequi! Excepturi 
                    dolorum reiciendis corporis voluptate id modi, minima maiores deleniti fugiat 
                    blanditiis et aperiam consequatur quas quaerat doloribus facere iusto!
                </p>
                <button className={styles.btnprimary}>
                <a href="/">Download CV</a>
                </button>
            </div>
        </div>
    </div>
  )
}

export default AboutMe