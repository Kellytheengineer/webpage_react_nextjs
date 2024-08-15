"use client";

import { useState } from 'react';

import styles from './Header.module.css'

const Header = () => {

  const [menuStatus, setMenuStatus ] = useState(false);

  function handleClick() {
    setMenuStatus(!menuStatus)
  }



  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.title}>🔥 Fireplace Palace</h1>
      <button onClick={handleClick}>{menuStatus ? 'Hide' : 'Show'} Main Menu</button>
      {menuStatus && <nav className = {styles.mainMenu}><button>X</button><p>Home</p><p>Meet the Founders</p></nav>}
    </header>
  );
};

export default Header;
