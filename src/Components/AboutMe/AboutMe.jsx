import { useTheme } from '../ThemeProvider/ThemeProvider';
import styles from './AboutMe.module.css'
import profile from '../../assets/profileImg.png'
import profileBorder from '../../assets/profileBorder.png'

const AboutMe=({contactRef})=>{
    const {theme}=useTheme();
    const handleContactClick = () => {
        if (contactRef?.current) {
            console.log("Scrolling to ContactSection..."); // Debugging
            contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
          } else {
            console.log("contactRef is null or undefined!"); // Debugging
          }
      };
    return (
        <div className={styles.main}>
            <div className={styles.span1}><div className={styles.span2}></div></div>
            <div className={styles.mainBody} style={{borderRadius:'5px',backgroundColor:(theme=='Dark')?'black':'white',color:(theme=='Dark')?'white':'black'}}>
            <div className={styles.content}>
                <div><p className={styles.name}>Ragulnath M B</p></div>
                <div><p style={{fontWeight:900}}>About Me</p></div>
                <div>
                <p>I am a Computer Science Engineering student at NIT Puducherry , with a strong interest in backend development and full-stack projects. I enjoy learning by building, whether it's web apps, backend systems, or experimenting with new tools.

I'm also exploring areas like graphics programming and AI. I like working on projects that are both challenging and meaningful.
                </p>
                </div>
                <div><p>I am open to exciting opportunities and collaborations on innovative projects. Let’s create something amazing together! <a onClick={()=>{handleContactClick();}}>Contact Me</a></p></div>
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