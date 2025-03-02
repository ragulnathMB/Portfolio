import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Projects.module.css';
import { useTheme } from '../ThemeProvider/ThemeProvider';

const ProjectItem = ({ name, description, livelink, githublink, imageURL, technologies, features }) => {
    const { theme } = useTheme();

    return (
        <div 
            className={styles.elBody} 
            style={{
                border: theme === 'Dark' ? '2px solid white' : '2px solid black',
                backgroundColor: theme === 'Dark' ? 'black' : 'rgb(223, 226, 228)',
                color: theme === 'Dark' ? 'white' : 'black'
            }}
        >
            <img src={imageURL} className={styles.elImg} alt={name} />
            <h3>{name}</h3>
            <p className={styles.description}>{description}</p>
            {features.length > 0 && (
                <div className={styles.featureList}>
                    <h4>Features:</h4>
                    <ul>
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            )}
            {technologies.length > 0 && (
                <div className={styles.techList}>
                    <p>Technologies Used:</p>
                    <p>{technologies.join(', ')}</p>
                </div>
            )}



            {/* Features */}
            

            <div className={styles.elLinks}>
                {livelink && (
                    <a href={livelink} className={styles.linkItems} target="_blank" rel="noopener noreferrer">
                        Live
                    </a>
                )}
                {githublink && (
                    <a style={{backgroundColor:(theme==='Dark')?"white":"black",color:(theme==='Dark')?"black":"white"}} href={githublink} className={styles.linkItems} target="_blank" rel="noopener noreferrer">
                        Github
                    </a>
                )}
            </div>
        </div>
    );
};

const Project = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('https://portfolio-rl6m.onrender.com/projects') // Replace with actual API
            .then(response => {
                const filteredProjects = response.data.filter(proj => parseInt(proj.priority) >= 1 && parseInt(proj.priority) <= 4);
                setProjects(filteredProjects);
                console.log("Fetched Projects:", filteredProjects); // Proper console log placement
            })
            .catch(error => console.error('Error fetching projects:', error));
    }, []);
    const {theme}=useTheme();
    return (
        <div className={styles.mainProject}>
            <h2 style={{border:(theme==='Dark')?"2px solid white":"2px solid black",color:(theme==='Dark')?"white":"black"}} className={styles.heading}>Featured Projects:</h2>
            <div className={styles.projectGrid}>
                {projects.map(proj => (
                    <ProjectItem 
                        key={proj._id} 
                        name={proj.title} 
                        description={proj.description} 
                        livelink={proj.live} 
                        githublink={proj.github} 
                        imageURL={proj.imgUrl} 
                        technologies={proj.technologies || []} 
                        features={proj.features || []}
                    />
                ))}
            </div>
        </div>
    );
};

export default Project;
