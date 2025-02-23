import CartSVG from '../../assets/icons/cart0.svg';
import styles from './CartIcon.module.css';

const CartIcon = ({ itemCount }: { itemCount: number }) => {
  return (
    <div className={styles.cartIconContainer}>
      <img
        src={CartSVG} 
        alt="Shopping Cart"
        className={`${styles.cartIcon} ${itemCount > 0 ? styles.active : ""}`}
      />
      {itemCount > 0 && <span className={styles.cartBadge}>{itemCount}</span>}
    </div>
  );
};

export default CartIcon;