import React from 'react';
import styles from './Button.module.css';

function Button({children, onPress, select}) {
  return (
    <button className={`${styles.button} ${select ? styles.select : ""}`} onClick={onPress}>
        {children}
    </button>
  ) 
}

export default Button;