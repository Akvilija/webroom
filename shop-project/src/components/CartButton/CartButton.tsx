import { useCart } from '../../context/CartContext';
import Cart from '../../assets/icons/cart0.svg';
import Checked from '../../assets/icons/inchart.svg';
import styles from './CartButton.module.css';

interface CartButtonProps {
  productId: number;
}

const CartButton = ({ productId }: CartButtonProps): JSX.Element => {
  const { cartItems, addToCart, removeFromCart } = useCart();
  
  // Check if product is already in cart
  const inCart = cartItems.includes(productId);

  const toggleCart = () => {
    if (inCart) {
      removeFromCart(productId);
    } else {
      addToCart(productId);
    }
  };

  return (
    <button
      className={`${styles.cartButton} ${inCart ? styles.inCart : ""}`}
      onClick={toggleCart}
    >
      <img
        src={inCart ? Checked : Cart}
        alt={inCart ? 'In Cart icon' : 'Cart icon'}
        className={styles.cartIcon}
      />
      <span className={styles.cartText}>
        {inCart ? 'Krepšelyje' : 'Pridėti į krepšelį'}
      </span>
    </button>
  );
};

export default CartButton;