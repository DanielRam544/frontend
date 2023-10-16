import { createContext, useContext, useState } from "react";
import {
    createProductRequest,
    getProductsRequest,
    deleteProductRequest,
    getProductRequest,
    updateProductRequest
} from "../api/products";

const ProductsContext = createContext();

export const useProducts = () => {
    const context = useContext(ProductsContext);

    if (!context) {
        throw new Error("useProducts debe estar dentro de un ProductsProvider.")
    }

    return context;
}

export function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);

    // Función para crear un producto
    const createProduct = async (product) => {
        // console.log(product);
        const res = await createProductRequest(product);
        console.log(res);
    }

    // Función para obtener el listado de productos
    const getProducts = async () => {
        try {
            const res = await getProductsRequest();
            // console.log(res);
            // Asignamos la respuesta del backend al arreglo de productos
            setProducts(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    // Función para eliminar un producto de la base de datos
    const deleteProduct = async (id) => {
        try {
            const res = await deleteProductRequest(id);
            // console.log(res.data);
            if (res.status === 200)
                setProducts(products.filter(product => product._id != id));
        } catch (error) {
            console.log(error);
        }
    }

    // Función para obtener un producto por id de la base de datos
    const getProduct = async (id) => {
        try {
            const res = await getProductRequest(id);
            console.log(res);
        } catch (error) {
            console.log('Hola muchachon');
            console.log(error);
        }
    }

    //Funcion para editar un producto
    const updateProduct = async (id, product) => {
        try {
            await updateProductRequest(id, product);
        } catch (error) {
            console.log(error);
        }
    }//fin de la funcion updateProduct

    return (
        <ProductsContext.Provider value={{
            products,
            createProduct,
            getProducts,
            deleteProduct,
            getProduct,
            updateProduct
        }}>
            {children}
        </ProductsContext.Provider>
    )
}