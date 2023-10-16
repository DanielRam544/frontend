import { useEffect } from 'react';
import { useProducts } from '../context/ProductsContext';
import ProductCard from '../components/ProductCard';

function ProductsPage() {
  const { getProducts, products } = useProducts();

  // Ejecutamos la función getProducts inmediatamente después de que se cargue el componente
  useEffect(() => {
    getProducts();
  }, [])

  if (products.length === 0)
    return (<h1>No hay productos para listar.</h1>)

  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2'>
      {
        products.map((product) => (
          <ProductCard product={product} key={product._id} />
          // <div key={product._id}>
          //   <h1>{product.name}</h1>
          //   <h1>{product.price}</h1>
          //   <h1>{product.year}</h1>
          // </div>
        ))
      }
    </div>
  )
}

export default ProductsPage