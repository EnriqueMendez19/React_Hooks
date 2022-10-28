import { Product } from '../utils/types';

export enum ActionStoreEnum {
    ADD_PRODUCT = 'addProduct',
    REMOVE_PRODUCT = 'removeProduct',
    EMPTY = 'empty',
    SET_CLIENT = 'setClient',
    SET_ADDRESS = 'setAddress',
}

export type Action = {
    type: ActionStoreEnum.ADD_PRODUCT,
    data: Product
} | {
    type: ActionStoreEnum.SET_ADDRESS,
    data: string
} |  {
    type: ActionStoreEnum.SET_CLIENT,
    data: string
} |  {
    type: ActionStoreEnum.REMOVE_PRODUCT,
    data: number
} | {
    type: ActionStoreEnum.EMPTY
}

export type ShoppingCarState = {
    products: Product[];
    address: string;
    amount: number;
    client: string;
}
