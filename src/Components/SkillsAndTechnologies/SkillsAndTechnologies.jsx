import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./SkillsAndTechnologies.module.css";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const SkillElement = ({ name, imageUrl }) => {
  const { theme } = useTheme();

  return (
    <div
      className={styles.elBody}
      style={{
        backgroundColor: theme === "Dark" ? "black" : "white",
        border: theme === "Dark" ? "2px solid white" : "2px solid black",
        borderRadius: "100px",
        color: theme === "Dark" ? "white" : "black",
      }}
    >
      <img className={styles.imgel} src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
      </div>
    </div>
  );
};

const SkillsAndTechnologies = () => {
  const [skills, setSkills] = useState([]);
  const { theme } = useTheme();


  useEffect(() => {
    axios
      .get("http://localhost:5000/skills")
      .then((response) => {
        setSkills(response.data);
      })
      .catch((error) => {
        console.error("Error fetching skills:", error);
      });
  }, []);

  // Duplicate skills to create a seamless infinite loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className={styles.carouselContainer}>
      <p className={styles.title} style={{color:(theme==='Dark')?"white":"black",border:(theme==='Dark')?"2px solid white":"2px solid black"}}>Tools and Technologies I have worked on</p>

      <div className={styles.carouselWrapper}>
        <div className={styles.carousel}>
          <div className={`${styles.marquee} ${styles.row1}`}>
            {duplicatedSkills.map((skill, index) => (
              <SkillElement key={index} name={skill.elName} imageUrl={skill.imageUrl} />
            ))}
          </div>
        </div>

        <div className={styles.carousel}>
          <div className={`${styles.marquee} ${styles.row2}`}>
            {duplicatedSkills.map((skill, index) => (
              <SkillElement key={index} name={skill.elName} imageUrl={skill.imageUrl} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndTechnologies;
