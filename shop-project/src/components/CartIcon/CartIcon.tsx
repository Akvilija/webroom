import CartSVG from '../../assets/icons/cart0.svg';
import styles from './CartIcon.module.css';
import { useCart } from '../../context/CartContext';

const CartIcon = () => {
  const { cartItems } = useCart();

  return (
    <div className={styles.cartIconContainer}>
      <img src={CartSVG} alt="Shopping Cart" className={styles.cartIcon} />
      {cartItems.length > 0 && <span className={styles.cartBadge}>{cartItems.length}</span>}
    </div>
  );
};

export default CartIcon;
