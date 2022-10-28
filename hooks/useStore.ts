import { useContext, useReducer } from 'react';
import { StoreContext } from '../context/StoreContext';
import { Category, Product } from '../utils/types';
import { categories, products as productList } from '../utils/data';

export const useStore = () => {
    const {
        products,
        setProducts,
        currentCategory,
        setCurrentCategory,
        shoppingCar: {
            address,
            amount,
            client,
            products: productsInCar,
            emptyCar,
            addProduct,
            removeProduct,
            setAddressCar,
            setClientCar
        }
    } = useContext(StoreContext);

    const totalProducts = products.length || 0;

    const changeCategory = (category: Category) => {
        setCurrentCategory(category);

        const productsFiltered = productList.filter((value: Product) => value.category.id === category.id);

        setProducts(productsFiltered);
    }


    const currentProductsInCar = productsInCar;

    const currentTotalProductsInCar = productsInCar.length;

    const currentClientInCar = client;

    const currentAddressInCar = address;

    const currentAmountInCar = amount;

    return {
        changeCategory,
        totalProducts,
        currentCategory,
        categories,
        products,
        currentProductsInCar,
        currentClientInCar,
        currentAddressInCar,
        currentAmountInCar,
        currentTotalProductsInCar,
        addProduct,
        removeProduct,
        emptyCar,
        setAddressCar,
        setClientCar,
    }
}
