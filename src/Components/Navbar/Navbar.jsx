import styles from './Navbar.module.css'
import { useTheme } from '../ThemeProvider/ThemeProvider';
const Navbar=({contactRef,homeRef})=>{
    const {theme,toggleTheme}=useTheme();
    const handleContactClick = () => {
        if (contactRef?.current) {
            console.log("Scrolling to ContactSection..."); // Debugging
            contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
          } else {
            console.log("contactRef is null or undefined!"); // Debugging
          }
      };
      const handleHomeClick = () => {
        if (homeRef?.current) {
            console.log("Scrolling to ContactSection..."); // Debugging
            homeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
          } else {
            console.log("contactRef is null or undefined!"); // Debugging
          }
      };
    return (
        <div className={styles.mainBody}>
            <div className={styles.mainContainer} style={{backgroundColor:(theme==='Dark')?'black':'white',color:(theme==='Dark')?'white':'black',border:'2px solid black'}}>
            <div className={styles.item} onClick={()=>{handleHomeClick()}}>
                <div style={{marginBottom:-30}}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={(theme==='Dark')?"white":"black"}><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></div>
                <div style={{marginBottom:-10}}><p>Home</p></div>
            </div>
            <div className={styles.item} onClick={()=>{handleContactClick();}}>
                <div style={{marginBottom:-30}}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={(theme==='Dark')?"white":"black"}><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg></div>
                <div style={{marginBottom:-10}}><p>Contact</p></div>
            </div>
            <a className={styles.item} href="https://drive.google.com/file/d/1_UzPyH7Nl_n-LuijxURmg6YPo-4w9enG/view?usp=sharing" target="to_blank">
                <div style={{marginBottom:-30}}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={(theme==='Dark')?"white":"black"}><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg></div>
                <div style={{marginBottom:-10}}><p>Resume</p></div>
            </a>
            <div className={styles.item} onClick={()=>{toggleTheme(theme);}}>
                <div style={{marginBottom:-30}}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={(theme==='Dark')?"white":"black"}><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg></div>
                <div style={{marginBottom:-10}}><p>Theme</p></div>
            </div>
        </div>
        </div>
    );
}
export default Navbar;