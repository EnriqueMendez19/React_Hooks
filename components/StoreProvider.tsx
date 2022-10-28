import React, { FC, PropsWithChildren, useEffect, useReducer, useState } from 'react'
import { StoreContext } from '../context/StoreContext';
import { Category, Product } from '../utils/types';
import { storeReducer } from '../reducers/reducer';
import { initialValuesShoppingCard } from '../reducers';
import { ActionStoreEnum } from '../reducers/type';

const StoreProvider: FC<PropsWithChildren> = (props) => {
    const {children} = props;

    const [state, dispatch] = useReducer(storeReducer, initialValuesShoppingCard)

    // ESTADOS PARA MI TIENDA
    const [currentCategory, setCurrentCategory] = useState<Category>()
    const [products, setProducts] = useState<Product[]>([]);


    const addProduct = (product: Product) => {
        dispatch({type: ActionStoreEnum.ADD_PRODUCT, data: product})
    }

    const removeProduct = (index: number) => {
        dispatch({type: ActionStoreEnum.REMOVE_PRODUCT, data: index})
    }

    const emptyCar = () => {
        dispatch({type: ActionStoreEnum.EMPTY})
    }

    const setAddressCar = (address: string) => {
        dispatch({type: ActionStoreEnum.SET_ADDRESS, data: address})
    }

    const setClientCar = (client: string) => {
        dispatch({type: ActionStoreEnum.SET_CLIENT, data: client})
    }


    return (
        <StoreContext.Provider value={{
            currentCategory,
            products,
            setCurrentCategory,
            setProducts,
            shoppingCar: {
                amount: state.amount,
                address: state.address,
                client: state.client,
                products: state.products,
                addProduct,
                removeProduct,
                emptyCar,
                setAddressCar,
                setClientCar,
            }
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider;
