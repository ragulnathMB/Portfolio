import React, { useEffect, useState } from "react";
import styles from "./Experience.module.css";
import axios from "axios"; // Install using `npm install axios`
import { useTheme } from "../ThemeProvider/ThemeProvider";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {theme}=useTheme();

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get("http://localhost:5000/experience"); // Replace with your actual API URL
        setExperiences(response.data);
      } catch (err) {
        setError("Failed to load experience data");
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.timelineContainer} >
      <h2 className={styles.title} style={{color:(theme==='Dark')?"white":"black",border:(theme==='Dark')?"2px solid white":"2px solid black"}}>Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.timelineItem} style={{color:(theme==='Dark')?"white":"black",backgroundColor:(theme==='Dark')?"black":"white"}}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent} style={{color:(theme==='Dark')?"white":"black",backgroundColor:(theme==='Dark')?"black":"white"}}>
              <h3>{exp.role} - <span className={styles.company}>{exp.company}</span></h3>
              <p className={styles.duration}>{exp.duration}</p>
              <ul>
                {exp.responsibilities.map((res, idx) => (
                  <li key={idx}>{res}</li>
                ))}
              </ul>
              <p className={styles.techStack}><strong>Tech Stack:</strong> {exp.tech_stack.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
