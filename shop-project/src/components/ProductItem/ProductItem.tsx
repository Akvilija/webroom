import styles from './ProductItem.module.css'

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
      {/* Left: Product Image */}
      {product.image && (
        <div className={styles.imageContainer}>
          <img
            src={product.image}
            alt={`${product.name} augalas`}
          />
        </div>
      )}

      {/* Right: Product Info */}
      <div className={styles.infoContainer}>
        {product.name && <h2>{product.name}</h2>}
        {product.description && <p>{product.description}</p>}
        {product.price && <p className={styles.price}>{product.price}</p>}
      </div>

      {/* Bottom-right Cutout with Button */}
      <div className={styles.buttonContainer}>
        <button className={styles.productButton}>Pridėti į krepšelį</button>
      </div>
    </div>
  );
};

export default ProductItem;
