import { Action, ActionStoreEnum, ShoppingCarState } from './type';
import { initialValuesShoppingCard } from './index';

export const storeReducer = (state: ShoppingCarState, action: Action) => {
    const products = [...state.products];
    let amount = 0;

    switch (action.type) {
        case ActionStoreEnum.ADD_PRODUCT:
            products.push(action.data);

            amount = products.reduce((prev, a) => prev + a.price, 0)

            return {
                ...state,
                products,
                amount
            }

        case ActionStoreEnum.REMOVE_PRODUCT:
            products.splice(action.data, 1)

            amount = products.reduce((prev, a) => prev + a.price, 0)

            return {
                ...state,
                products,
                amount
            }

        case ActionStoreEnum.EMPTY:
            return initialValuesShoppingCard

        case ActionStoreEnum.SET_CLIENT:
            return {
                ...state,
                client: state.client
            }

        case ActionStoreEnum.SET_ADDRESS:
            return {
                ...state,
                address: state.address
            }

        default:
            throw new Error('Not Found Action');
    }
}
