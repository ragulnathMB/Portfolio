import { useTheme } from '../ThemeProvider/ThemeProvider';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Testimonial.module.css';
import sampleImg from '../../assets/sampleImg.png'

const TestimonialItem = ({ name, imageURL, description }) => {
    const { theme } = useTheme();
    return (
        <div className={styles.testBody} style={{
            borderBottom: '15px solid gray',
            borderTop:'15px solid gray',
            backgroundColor: theme === 'Dark' ? '#1e1e1e' : 'white',
            color: theme === 'Dark' ? 'white' : 'black',
            boxShadow: theme === 'Dark' ? '0 4px 8px rgba(255, 255, 255, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.2)'
        }}>
            <img className={styles.imgTest} src={imageURL} alt={name} />
            <p className={styles.testName}>~ {name}</p>
            <p className={styles.desc}>{description}</p>
        </div>
    );
};

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);
    const {theme}=useTheme();

    useEffect(() => {
        axios.get('https://portfolio-rl6m.onrender.com/testimonials')
            .then(response => setTestimonials(response.data))
            .catch(error => console.error('Error fetching testimonials:', error));
    }, []);

    return (
        <div className={styles.testimonialContainer}>
            <h2 className={styles.title} style={{border:(theme==='Dark')?"2px solid white":"2px solid black",color:(theme==='Dark')?"white":"black"}}>Testimonials</h2>
            <div className={styles.testimonialGrid}>
                {testimonials.map((testimonial, index) => (
                    <TestimonialItem
                        key={index}
                        name={testimonial.name}
                        description={testimonial.message}
                        imageURL={testimonial.imgUrl || sampleImg}
                    />
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
