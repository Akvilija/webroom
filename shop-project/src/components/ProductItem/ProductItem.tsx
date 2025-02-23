import styles from './ProductItem.module.css';
import CutoutSVG from '../../assets/icons/cutout.svg';
import CartButton from '../CartButton';

interface ProductProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  };
}

const ProductItem = ({ product }: ProductProps): JSX.Element => {
  return (
    <div className={styles.productItem}>
      {/* SVG Background (Cutout) */}
      <img src={CutoutSVG} alt="Cutout Background" className={styles.cutoutSvg} />

      {/* Product Content */}
      <div className={styles.content}>
        {/* Left: Product Image */}
        <div className={styles.imageContainer}>
          <img src={product.image} alt={`${product.name} augalas`} />
        </div>

        {/* Right: Product Info */}
        <div className={styles.infoContainer}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className={styles.price}>{product.price} €</p>
        </div>

      </div>
      <CartButton productId={product.id} />
    </div>
  );
};

export default ProductItem;