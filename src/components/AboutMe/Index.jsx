import { useEffect, useRef } from 'react';
import styles from './AboutMe.module.css';
import {motion, useInView, useAnimation} from 'framer-motion';

function AboutMe({txt}) {

    const textRef = useRef(null);
    const imgRef = useRef(null);
    const inView = useInView(textRef, {once: true})
    const animate = useAnimation(inView);

    const inViewImg = useInView(imgRef, {once: true})
    const animateImg = useAnimation(inViewImg);

    useEffect(() => {
        if(inView){
            animate.start("visible");
            animateImg.start("visible")
        }
    }, [inView])

  return (
    <div className={styles.container}>
        <motion.img
            ref={imgRef}
            src='../../../src/assets/dev.png'
            alt="dev"
            variants={{
                hidden: { opacity: 0, y: -150 },
                visible: {opacity: 1, y: 0}
            }}
            initial="hidden"
            animate={animateImg}
            transition={{duration: .5, delay: .30}}
        />
       <div ref={textRef}>
        <motion.div 
                variants={{
                    hidden: { opacity: 0, x: -75 },
                    visible: {opacity: 1, x: 0}
                }}
                initial="hidden"
                animate={animate}
                transition={{duration: .5, delay: .35}}
            className={styles.info}>
                <h3 className='strong'>Miqueias Belfort</h3>
                <p>{txt}</p>
                <ul className={styles.listLinks}>
                    <li>
                        <a href="https://www.linkedin.com/in/miqueias-belfort/">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/miqueiasbelfort/">
                            <i className="bi bi-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/miqueiasbelfort">
                            <i className="bi bi-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.tabnews.com.br/Mikw">
                            <i className="bi bi-folder2"></i>
                        </a>
                    </li>
                </ul>
        </motion.div>
       </div>
    </div>
  )
}

export default AboutMe;