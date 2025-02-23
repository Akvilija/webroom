import { NavLink } from 'react-router-dom'
import styles from './HeaderNavigation.module.css'

const HeaderNavigation = (): JSX.Element => {
  return (
    // Navigacija i skirtingas kategorijas
    <nav className={styles.navigation}>
      <ul className={styles.navigationUl}>
        <li>
          <NavLink to="/categories">produktų kategorijos</NavLink>
        </li>
        <li>
          <NavLink to="/collections">kolekcijos</NavLink>
        </li>
        <li>
          <NavLink to="/care">priežiūra</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">kontaktai</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderNavigation