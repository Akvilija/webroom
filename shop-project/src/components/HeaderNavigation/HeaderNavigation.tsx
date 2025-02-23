import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import styles from './HeaderNavigation.module.css';

const HeaderNavigation = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={styles.navigation}>
      {/* Hamburger Button */}
      <button onClick={toggleMenu} className={styles.hamburger}>
        ☰
      </button>

      {/* Navigation List */}
      <ul className={`${styles.navigationUl} ${isMenuOpen ? styles.open : ''}`}>
        <li>
          <NavLink to="/categories" onClick={closeMenu}>produktų kategorijos</NavLink>
        </li>
        <li>
          <NavLink to="/collections" onClick={closeMenu}>kolekcijos</NavLink>
        </li>
        <li>
          <NavLink to="/care" onClick={closeMenu}>priežiūra</NavLink>
        </li>
        <li>
          <NavLink to="/contacts" onClick={closeMenu}>kontaktai</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
