import styles from './ProductItem.module.css'
import CutoutSVG from '../../assets/icons/cutout.svg'
import CartButton from '../CartButton'
// Produktu komponento tipai (ProductProps) nurodo, kokius duomenis priims komponentas
interface ProductProps {
  product: {
    id: number
    name: string
    description: string
    price: number
    image: string
  }
}

const ProductItem = ({ product }: ProductProps): JSX.Element => {
  return (
    <div className={styles.productItem}>
      <div className={styles.productInnerContainer}>
        {/* SVG foninis elementas su ispjova */}
        <img src={CutoutSVG} alt="Cutout Background" className={styles.cutoutSvg} />

        {/* Productu turinys */}
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img src={product.image} alt={`${product.name} augalas`} />
          </div>

          <div className={styles.infoContainer}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className={styles.price}>{product.price} €</p>
          </div>
        </div>

        {/* mygtuko komponentas apacioje */}
        <CartButton productId={product.id} />
      </div>
    </div>
  )
}

export default ProductItem
