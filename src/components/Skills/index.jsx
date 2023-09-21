import styles from './Skills.module.css';
import {AiFillHtml5, AiFillGithub} from 'react-icons/ai';
import {BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoFirebase, BiLogoTypescript} from 'react-icons/bi';
import {FaNodeJs, FaJava} from 'react-icons/fa';
import {SiCsharp} from 'react-icons/si';
import {PiFileSqlFill} from 'react-icons/pi';
import { useState } from 'react';
import {motion} from 'framer-motion';

const Icons = [
    {
        id: 1,
        icon: <AiFillHtml5/>,
        func: "HTML"
    },
    {
        id: 2,
        icon: <BiLogoCss3/>,
        func: "CSS"
    },
    {
        id: 3,
        icon: <BiLogoJavascript/>,
        func: "JS"
    },
    {
        id: 4,
        icon: <BiLogoTypescript/>,
        func: "TS"
    },
    {
        id: 5,
        icon: <BiLogoReact/>,
        func: "REACT"
    },
    {
        id: 6,
        icon: <FaNodeJs/>,
        func: "NODE"
    },
    {
        id: 7,
        icon: <SiCsharp/>,
        func: "C#"
    },
    {
        id: 8,
        icon: <BiLogoFirebase/>,
        func: "FIREBASE"
    },
    {
        id: 9,
        icon: <PiFileSqlFill/>,
        func: "SQL"
    },
    {
        id: 10,
        icon: <AiFillGithub/>,
        func: "GIT"
    },
    {
        id: 11,
        icon: <FaJava/>,
        func: "JAVA"
    },
]

function Skills({lang}) {

    const [text, setText] = useState(lang.default);

    const handleText = (type) => {
        switch(type){
            case "HTML":
                setText(lang.html);
            break;
            case "CSS":
                setText(lang.css);
            break;
            case "JS":
                setText(lang.js);
            break;
            case "TS":
                setText(lang.ts);
            break;
            case "REACT":
                setText(lang.react);
            break;
            case "NODE":
                setText(lang.node);
            break;
            case "C#":
                setText(lang.csharp);
            break;
            case "FIREBASE":
                setText(lang.firebase);
            break;
            case "SQL":
                setText(lang.sql);
            break;
            case "GIT":
                setText(lang.git);
            break;
            case "JAVA":
                setText(lang.java);
            break;
            default:
                setText(lang.default);
        }
    }

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
    };
      
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
    };

    const motionDiv = {
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 },
    }

  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <motion.div variants={motionDiv} initial="hidden" animate="visible" transition={{duration: .5}} className={styles.texts} onClick={handleText}>
                <h1 className='strong'>{lang.title}</h1>
                <p>{text}</p>
            </motion.div>
            <motion.ul 
                className={styles.list}
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {
                    Icons.map((icon) => (
                        <motion.li key={icon.id} onClick={() => handleText(icon.func)} variants={item}>{icon.icon}</motion.li>
                    ))
                }
            </motion.ul>
        </div>
    </div>
  )
}

export default Skills;