import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import styles from './HeaderNavigation.module.css'

const HeaderNavigation = (): JSX.Element => {
  // Naudojamas `useState` norint valdyti ar meniu yra atidarytas ar uzdarytas
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // funkcija, kuri perjungia meniu busena
  const toggleMenu = () => setIsMenuOpen(prev => !prev)
  // uzdaromas meniu
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className={styles.navigation}>
      {/* Hamburger mygtukas */}
      <button onClick={toggleMenu} className={styles.hamburger}>
        ☰
      </button>

      {/* Headerio navigacijos sarasas */}
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
  )
}

export default HeaderNavigation
