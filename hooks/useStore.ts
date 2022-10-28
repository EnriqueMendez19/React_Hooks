import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import { Category, Product } from '../utils/types';
import { categories, products as productList } from '../utils/data';

export const useStore = () => {
    const {
        products,
        setProducts,
        currentCategory,
        setCurrentCategory
    } = useContext(StoreContext);

    const totalProducts = products.length || 0;

    const changeCategory = (category: Category) => {
        setCurrentCategory(category);

        const productsFiltered = productList.filter((value: Product) => value.category.id === category.id);

        setProducts(productsFiltered);
    }

    return {
        changeCategory,
        totalProducts,
        currentCategory,
        categories,
        products
    }
}
