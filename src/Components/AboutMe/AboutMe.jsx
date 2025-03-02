import { useTheme } from '../ThemeProvider/ThemeProvider';
import styles from './AboutMe.module.css'
import profile from '../../assets/profileImg.png'
import profileBorder from '../../assets/profileBorder.png'

const AboutMe=()=>{
    const {theme}=useTheme();
    return (
        <div className={styles.main}>
            <div className={styles.span1}><div className={styles.span2}></div></div>
            <div className={styles.mainBody} style={{borderRadius:'5px',backgroundColor:(theme=='Dark')?'black':'white',color:(theme=='Dark')?'white':'black'}}>
            <div className={styles.content}>
                <div><p className={styles.name}>Ragulnath M B</p></div>
                <div><p style={{fontWeight:900}}>About Me</p></div>
                <div>
                <p>Hi, I’m a passionate developer with a deep interest in programming and emerging technologies. I thrive on solving real-world problems and transforming imaginative ideas into reality through code. With experience in Web Development, Augmented Reality, and Machine/Deep Learning,
                     I have worked on projects that blend innovation with practicality. My goal is to create cutting-edge solutions that drive technology forward and make a meaningful impact.
                </p>
                </div>
                <div><p>I’m open to exciting opportunities and collaborations on innovative projects. Let’s create something amazing together! <a>Contact Me</a></p></div>
            </div>
            <div className={styles.imgContainer}>
                <img className={styles.imgB} src={profileBorder}/>
                <img className={styles.img}src={profile}/>
            </div>
            
        </div>
        <div className={styles.span3}><div className={styles.span4}></div></div>
        </div>
    );
}
export default AboutMe;