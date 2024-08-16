"use client";

import { useState  } from 'react';
import styles from './Header.module.css'
import Link from 'next/link';


const Header = () => {

  const [menuStatus, setMenuStatus ] = useState(false);
  function handleClick() {
    setMenuStatus(!menuStatus)
  }
  function closeMenu() {
    setMenuStatus(false)
  }

  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.title}>🔥 Fireplace Palace</h1>
      <button onClick={handleClick}>{menuStatus ? 'Hide' : 'Show'} Main Menu</button>
      {menuStatus && <nav className = {styles.mainMenu}>
      <button onClick={closeMenu}>X</button>
      <Link onClick={handleClick} href="./">Home</Link>
      <Link onClick={handleClick} href="/founders/">Meet the Founders</Link>
      </nav>}
    </header>
  );
};

export default Header;
