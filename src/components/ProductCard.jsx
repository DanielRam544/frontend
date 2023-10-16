import React from 'react';
import { useProducts } from '../context/ProductsContext';
import { Link } from 'react-router-dom';

import { IoTrashSharp, IoPencilSharp } from "react-icons/io5";

function ProductCard({ product }) {
    const { deleteProduct } = useProducts();

    return (
        <div className='max-w-sm w-full sm:max-w-md lg:max-w-xl xl:max-w-2xl mx-auto mb-4'>
            <div className='bg-zinc-800 p-4 rounded-md'>
                <header className='text-center mb-4'>
                    <h1 className='text-3xl font-bold'>{product.name}</h1>
                </header>
                <div className='flex justify-center space-x-2 mb-4'>
                    <button className='bg-red-500 px-3 py-1 rounded-md text-white flex items-center' onClick={() => {
                        // console.log(product._id);
                        deleteProduct(product._id);
                    }}>

                        <IoTrashSharp className="text-xl mr-1" /> Delete
                    </button>
                    <Link to={'/products/' + product._id} className='bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md flex items-center'>
                        <IoPencilSharp className="text-xl mr-1" /> Editar
                    </Link>
                </div>
                <p className='text-slate-300 my-2 text-center text-lg'>
                    Price: {product.price}
                </p>
                <p className='text-slate-300 my-2 text-center text-lg'>
                    Year: {product.year}
                </p>
            </div>
        </div>
    );
}

export default ProductCard;
