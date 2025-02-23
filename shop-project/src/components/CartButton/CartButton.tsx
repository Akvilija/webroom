import { useState } from "react";
import styles from "./CartButton.module.css";

interface CartButtonProps {
  productId: number;
}

const CartButton = ({ productId }: CartButtonProps): JSX.Element => {
  const [inCart, setInCart] = useState(false);

  const toggleCart = () => {
    setInCart(!inCart);
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