import { createContext } from 'react';
import { Category, Product } from '../utils/types';
import { ShoppingCarState } from '../reducers/type';
import { initialValuesShoppingCard } from '../reducers';

type ChangeStateShoppingCard = {
    addProduct: (value: Product) => void,
    removeProduct: (index: number) => void,
    emptyCar: () => void,
    setAddressCar: (value: string) => void,
    setClientCar: (value: string) => void,
}

type StoreContextType = {
    products: Product[];
    currentCategory?: Category;
    setProducts: (products: Product[]) => void;
    setCurrentCategory: (currentCategory: Category) => void;
    shoppingCar: ShoppingCarState & ChangeStateShoppingCard
}

const initialValues: StoreContextType = {
    products: [],
    currentCategory: undefined,
    setProducts: () => {
    },
    setCurrentCategory: () => {
    },
    shoppingCar: initialValuesShoppingCard as any
}

export const StoreContext = createContext<StoreContextType>(initialValues);
