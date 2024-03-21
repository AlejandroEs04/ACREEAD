import React from 'react';
import Navegacion from './Navegacion';
import styles from '../styles/navbar.module.css';

const MenuSlider = () => {
  return (
    <div className={styles.navBarContainer}>
        <div className={styles.navBar}>
            <div>
                
            </div>

            <h2>Menu</h2>
            <Navegacion />
        </div>
    </div>
  )
}

export default MenuSlider