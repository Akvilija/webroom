import products from '../../data/products.json'
import ProductsList from "../../components/ProductsList";

const ProductsPage = (): JSX.Element => {
    return (
        <div>
            <h1>Sodo augalai</h1>
            <ProductsList products={products} />
        </div>
    );
}

export default ProductsPage;