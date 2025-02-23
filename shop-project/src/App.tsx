import './App.css'
import Header from './components/Header/Header'
import Layout from './components/Layout'
import ProductsPage from './pages/ProductsPage/ProductsPage'

function App(): JSX.Element {


  return (
    <>
      <Layout header={<Header />} >
        <ProductsPage />
      </Layout>
    </>
  )
}

export default App
