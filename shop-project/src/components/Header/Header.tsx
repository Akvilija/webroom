import logo from '../../assets/icons/logo.svg'
import HeaderActions from '../HeaderActions';
import HeaderNavigation from '../HeaderNavigation';
import styles from './Header.module.css';

const Header = (): JSX.Element => {
    return (
        <header className={styles.header}>
            {/* konteineris logo ir navigationui, kad butu vienas salia kito */}
            <div className={styles.headerLogoAndNavigation}>
                <img src={logo} alt="Logo" />
                <HeaderNavigation />
            </div>
            {/* Atskiras komponentas headerio veiksmams (parinkti kalba, useris ir pirkimas) */}
            <HeaderActions />
        </header>
    );
    }

export default Header
