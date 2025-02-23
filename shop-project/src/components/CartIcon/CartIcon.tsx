import CartSVG from '../../assets/icons/cart0.svg'
import styles from './CartIcon.module.css'
import { useCart } from '../../context/CartContext'

const CartIcon = () => {
  // is konteksto paimamas cartitems masyvas, kuriame saugomi prideti produktai
  const { cartItems } = useCart()

  return (
    <div className={styles.cartIconContainer}>
      <img src={CartSVG} alt='Shopping Cart' className={styles.cartIcon} />
      {/* Jei krepselyje yra bent viena preke, rodoma zyma su prekiu skaiciumi */}
      {cartItems.length > 0 && <span className={styles.cartBadge}>{cartItems.length}</span>}
    </div>
  )
}

export default CartIcon
