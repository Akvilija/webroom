import { useCart } from '../../context/CartContext';
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
      {inCart ? (
        <>
          <span className={styles.cartIcon}>🛒</span>
          Krepšelyje
        </>
      ) : (
        <>
          <span className={styles.addIcon}>➕</span>
          Pridėti į krepšelį
        </>
      )}
    </button>
  );
};

export default CartButton;
