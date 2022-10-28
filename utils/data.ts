import { Category, Product } from './types';

export const categories: Category[] = [
    {
        id: 1,
        name: 'Camisas'
    },
    {
        id: 2, name: 'Pants'
    },
    {
        id: 3, name: 'Zapatos'
    },
]

export const products: Product[] = [
    {
        id: 1,
        name: 'Printed T-shirt',
        picture: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
        price: 350,
        category: categories[0]
    },
    {
        id: 2,
        name: 'Slub jersey T-shirt',
        picture: 'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80',
        price: 220,
        category: categories[0]
    },
    {
        id: 3,
        name: 'T-shirt with a motif',
        picture: 'https://images.unsplash.com/photo-1603320409990-02d834987237?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        price: 350,
        category: categories[0]
    },
    {
        id: 4,
        name: 'Art T-shirt',
        picture: 'https://images.unsplash.com/photo-1603320410149-db26b12d5c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
        price: 450,
        category: categories[0]
    },
    {
        id: 5,
        name: 'Pants V12',
        picture: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        price: 120,
        category: categories[1]
    },
    {
        id: 6,
        name: 'Pants V78',
        picture: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        price: 500,
        category: categories[1]
    },
    {
        id: 7,
        name: 'Pants VAS4',
        picture: 'https://images.unsplash.com/photo-1551854838-212c50b4c184?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        price: 430,
        category: categories[1]
    },
    {
        id: 8,
        name: 'Art T-shirt',
        picture: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80',
        price: 120,
        category: categories[2]
    },
]
