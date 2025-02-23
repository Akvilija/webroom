import ProductItem from '../ProductItem'
import styles from './ProductList.module.css'

interface Product {
    id: number
    name: string
    description: string
    price: number
    image: string
}

interface ProductsListProps {
    products: Product[];
  }

const ProductsList = ({ products }: ProductsListProps): JSX.Element => {
    return (
        <div className={styles.productListContainer}>
           {products.map(product => (
              <ProductItem key={product.id} product={product}/>
           ))}
        </div>
    );
}

export default ProductsList;