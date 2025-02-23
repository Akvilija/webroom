import ProductItem from '../ProductItem'
import styles from './ProductList.module.css'
// apibreztas produkto tipas, kuris atitinka kiekvieno produkto duomenu struktura
interface Product {
    id: number
    name: string
    description: string
    price: number
    image: string
}
// saraso komponento tipas
interface ProductsListProps {
    products: Product[]
  }
// Produktu saraso komponentas, kuris atvaizduoja visus produktus
const ProductsList = ({ products }: ProductsListProps): JSX.Element => {
    return (
        <div className={styles.productListContainer}>
             {/* Iteruojame per kiekvieną produkta ir sukuriame `ProductItem` komponenta */}
           {products.map(product => (
              <ProductItem key={product.id} product={product}/>
           ))}
        </div>
    )
}

export default ProductsList