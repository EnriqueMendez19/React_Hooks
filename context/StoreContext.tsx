import { createContext } from 'react';
import { Category, Product } from '../utils/types';

type StoreContextType = {
    products: Product[];
    currentCategory?: Category;
    setProducts: (products: Product[]) => void;
    setCurrentCategory: (currentCategory: Category) => void;
}

const initialValues: StoreContextType = {
    products: [],
    currentCategory: undefined,
    setProducts: () => {
    },
    setCurrentCategory: () => {
    }
}

export const StoreContext = createContext<StoreContextType>(initialValues);
