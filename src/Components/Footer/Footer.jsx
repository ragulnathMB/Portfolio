import { useTheme } from '../ThemeProvider/ThemeProvider';
import styles from './Footer.module.css'

const Footer=()=>{
    const {theme}=useTheme();
    return (
        <div className={styles.mainBody}>
            <div className={styles.copyright} style={{backgroundColor:(theme==='Dark')?'black':'white',color:(theme==='Dark')?'white':'black',border:'2px solid black'}}><p>© 2024 M B Ragunath. All rights reserved.</p></div>
        </div>
    );
}
export default Footer;