import { NavLink } from 'react-router'
import userIcon from '../../assets/icons/user.svg'
import cartIcon from '../../assets/icons/cart0.svg'
import languageIcon from '../../assets/icons/language.svg'
import styles from './HeaderActions.module.css'

const HeaderActions = (): JSX.Element => {
    return (
        <div className={styles.headerActions}>
            {/* Headerio veiksmu icons kaip linkai, kad paspaudus nueitu i pasirinkta veiksma */}
            <ul>
                <li>
                    <NavLink to='/language'>
                        <img src={languageIcon} alt='language icon' />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/user'>
                        <img src={userIcon} alt='user icon' />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/cart'>
                        <img src={cartIcon} alt='cart icon' />
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default HeaderActions