import Link from "next/link";
import styles from "../../styles/Header.module.scss";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleActiveMenu = () => {
    setIsMenuActive(!isMenuActive);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/media/pokemon_icon.png" />
        </div>
        <ul className={`${styles.navbarList} ${isMenuActive ? styles.activeMenu : ''}`} onClick={toggleActiveMenu}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/battle-arena">Battle Arena</Link>
          </li>
          <li>
            <Link href="/pokedex">Pokedex</Link>
          </li>
          <li className={styles.about}>
            <Link href="/about">About</Link>
          </li>
        </ul>
        <div className={`${styles.navbarToggle} ${isMenuActive ? styles.isActiveMenu : ''}`} 
        id={styles.mobileMenu} 
        onClick={toggleActiveMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}
