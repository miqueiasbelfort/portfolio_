import styles from './Projects.module.css';
import {motion} from 'framer-motion';

const container = {
  hidden: { opacity: 0, y: -75 },
  visible: { opacity: 1, y: 0 }
}

function Projects({options}) {
  
  return (
    <div className={styles.container}>
        <h1>{options.title}</h1>
        <div className={styles.containerProjects}>
          
          <motion.div variants={container} initial="hidden" animate="visible" transition={{duration: .5, delay: .30}} className={styles.projectBox}>
            <h3>{options.pro1.title}</h3>
            <p>{options.pro1.desc}</p>
            <div className={styles.projectLinks}>
              <a href={options.pro1.links.github}>Github</a>
              <span>-</span>
              <a href={options.pro1.links.site}>Site</a>
            </div>
          </motion.div>

          <motion.div variants={container} initial="hidden" animate="visible" transition={{duration: .5, delay: .50}} className={styles.projectBox}>
            <h3>{options.pro2.title}</h3>
            <p>{options.pro2.desc}</p>
            <div className={styles.projectLinks}>
              <a href={options.pro2.links.github}>Github</a>
              <span>-</span>
              <a href={options.pro2.links.site}>Site</a>
            </div>
          </motion.div>

          <motion.div variants={container} initial="hidden" animate="visible" transition={{duration: .5, delay: .70}} className={styles.projectBox}>
            <h3>{options.pro3.title}</h3>
            <p>{options.pro3.desc}</p>
            <div className={styles.projectLinks}>
              <a href={options.pro3.links.github}>Github</a>
            </div>
          </motion.div>
        
        </div>

        <motion.a variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }} initial="hidden" animate="visible" transition={{duration: .8, delay: 1}} href='https://github.com/miqueiasbelfort?tab=repositories' className={styles.repo}>{options.repo}</motion.a>

        <div className={styles.padding}></div>

    </div>
  )
}

export default Projects;