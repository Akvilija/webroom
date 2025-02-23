import { useCart } from '../../context/CartContext';
import Cart from '../../assets/icons/cart0.svg';
import Checked from '../../assets/icons/inchart.svg';
import styles from './CartButton.module.css';

interface CartButtonProps {
  productId: number;
}

const CartButton = ({ productId }: CartButtonProps): JSX.Element => {
  const { cartItems, addToCart, removeFromCart } = useCart();
  
  // PAtikrinimas ar yra produktas krepselyje
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
      // dinamiska klase mygtuko stiliavimui, kai preke yra krepselyje ir ja galima pasirinkti
      className={`${styles.cartButton} ${inCart ? styles.inCart : ""}`}
      // paspaudus issaukiama funkcija kuri prideda arba isima is krepselio
      onClick={toggleCart}
    >
      <img
      // parenkama, kuri icona bus naudojama
        src={inCart ? Checked : Cart}
        alt={inCart ? 'In Cart icon' : 'Cart icon'}
        className={styles.cartIcon}
      />
      <span className={styles.cartText}>
        {/* dinamiskai parenkamas uzrasas */}
        {inCart ? 'Krepšelyje' : 'Pridėti į krepšelį'}
      </span>
    </button>
  );
};

export default CartButton;