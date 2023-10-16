import { useForm } from 'react-hook-form';
import { useProducts } from '../context/ProductsContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function ProductsFormPage() {
  const { register, handleSubmit } = useForm();
  const { createProduct, getProduct, updateProduct } = useProducts();
  const navigate = useNavigate();
  const params = useParams();
  // console.log(products);

  useEffect(() => {
    // console.log(params);
    // Si existe un id en params, obtenemos los datos del producto
    if (params.id) {
      getProduct(params.id);
    }
  }, [])

  const onSubmit = handleSubmit((data) => {
    if (params.id)
      updateProduct(params.id, data);
    else {
      createProduct(data);
    }
    navigate('/products');
  })//fin de oneSubmit

  return (
    <div className="flex items-center justify-center h-screen">
      <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
        <form onSubmit={onSubmit}>
          <h1 className='text-3xl font-bold my-3'>Formulario de Productos</h1>
          <label htmlFor='name'>Nombre del Producto</label>
          <input type='text' className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' placeholder='Nombre del Producto'
            {
            ...register('name')
            }
            autoFocus
          />

          <label htmlFor='description'>Descripción del Producto</label>
          <input type='number' step='0.10' className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
            placeholder='Precio del Producto'
            {
            ...register('price', {
              valueAsNumber: true
            })
            }
          />

          <label htmlFor='year'>Año del Producto</label>
          <input type='number' max='2023' min='1900' step='1' className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
            placeholder='Año del Producto'
            {
            ...register('year', { valueAsNumber: true })
            }
          />
          <h1 className='text-3xl font-bold my-3'></h1>
          <button className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
            type='submit'>Guardar</button>
        </form>
      </div>
    </div>
  )
}

export default ProductsFormPage