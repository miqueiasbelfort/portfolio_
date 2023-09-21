import { useContext, useState, useEffect, useRef, useReducer } from 'react';
import styles from './app.module.css';
import {AppContext} from './context/context';
import langJson from './lang.json';
import { motion, useInView, useAnimation } from 'framer-motion';
import emailjs from '@emailjs/browser';
import EuaImg from './assets/eua.png';
import BrImg from './assets/brasil.png';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from './components/Button';
import AboutMe from './components/AboutMe/Index';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {

  const {setLang, lang} = useContext(AppContext);
  const [language, setLanguage] = useState(langJson.pt);
  const [page, setPage] = useState(language.btn1);


  const [state, dispatch] = useReducer((state, actions) => {
    switch(actions.type){
      case "name":
        return {...state, name: actions.data}
      case "email":
        return {...state, email: actions.data}
      case "message":
          return {...state, message: actions.data}
      case "clear":
        return {name: "", email: "", message: ""}
      default: 
        return {...state}
    }
  }, {name: "", email: "", message: ""});
  const {name, message, email} = state;

  const titleRef = useRef(null);
  const inInView = useInView(titleRef, {once: true});

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const handleLang = () => {
    const check = lang == 'pt' ? 'en' : 'pt';
    setLanguage(check == 'pt' ? langJson.pt : langJson.en);
    setPage(check == 'pt' ? langJson.pt.btn1 : langJson.en.btn1);
    setLang(check);
  }

  useEffect(() => {
    if(inInView){
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [inInView])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(email == "" || message == "" || name == ""){
      toast.warning(language.warning, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    // console.log(state);
    emailjs.send("service_dfwklem", "template_bdzfms8", { 
      to_name: name,
      message,
      email
    }, "eSJ7cuU5_rHynBp7_").then(() => {
      toast.success(language.message, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    });
  }

  return (
    <div className={styles.container}>
      <ToastContainer/>
      <section className={styles.initialSection}>
        <div className={styles.lang}>
          <img onClick={handleLang} src={lang == 'pt' ? EuaImg : BrImg} alt="change lang" />
        </div>
        <div ref={titleRef} style={{position: 'relative'}}>
          <motion.h1
            variants={{
              hidden: {opacity: 0, x: -75},
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={styles.title}
          >
            {language.title} <span className='strong'>{language.name}</span> <br /> {language.endTitle}.
          </motion.h1>
          <motion.div 
            variants={{
              hidden: {left: 0 },
              visible: { left: '100%' }
            }}
            initial="hidden"
            animate={slideControls}
            transition={{duration: 0.5, ease: 'easeIn'}}
            style={{
              position: 'absolute',
              top: 4,
              bottom: 4,
              left: 0,
              right: 0,
              background: 'var(--secondary)',
              zIndex: 20
            }}
          />
        </div>
        <span>{language.subtitle}</span>
      </section>
      <div className='lin'></div>
      <section className={styles.actions}>
        <div className={styles.buttons}>
          <Button select={page == language.btn1}  onPress={() => setPage(language.btn1)}>{language.btn1}</Button>
          <span>-</span>
          <Button select={page == language.btn2}  onPress={() => setPage(language.btn2)}>{language.btn2}</Button>
          <span>-</span>
          <Button select={page == language.btn3}  onPress={() => setPage(language.btn3)}>{language.btn3}</Button>
        </div>
        <div className={styles.page}>
          {
            page == language.btn1 && <AboutMe txt={language.aboutme}/>
          }
          {
            page == language.btn2 && <Skills lang={language.skills}/>
          }
          {
            page == language.btn3 && <Projects options={language.projects}/>
          }
          {
            page == language.btn4 && <h1>{language.btn4}</h1>
          }
        </div>
      </section>
      <section className={styles.contact}>
          <motion.h2 
            variants={{
              hidden: {opacity: 0, x: -75},
              visible: {opacity: 1, x: 0}
            }} 
            initial="hidden"
            animate="visible"
            transition={{duration: .5}}
          >
            {language.contact.title}
          </motion.h2>
          <motion.form
            variants={{
              hidden: {opacity: 0, x: -75},
              visible: {opacity: 1, x: 0}
            }} 
            initial="hidden"
            animate="visible"
            transition={{duration: .5, delay: .35}}
            className={styles.form} 
            onSubmit={handleSubmit}
          >
            <input 
              type="text"
              placeholder={language.contact.name}
              value={name}
              onChange={e => dispatch({type: "name", data: e.target.value})}
            />
            <input 
              type="text" 
              placeholder={language.contact.email}
              value={email}
              onChange={e => dispatch({type: "email", data: e.target.value})}
            />
            <textarea 
              placeholder={language.contact.message}
              value={message}
              onChange={e => dispatch({type: "message", data: e.target.value})}
            ></textarea>
            <div>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }} 
                type='submit'
              >{language.contact.btn}</motion.button>
            </div>
          </motion.form>
      </section>
    </div>
  )
}

export default App
