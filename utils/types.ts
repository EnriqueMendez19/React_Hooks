export type Category = {
    id: number;
    name: string;
}

export type Product = {
    id: number;
    picture: string;
    price: number;
    name: string;
    category: Category;
}
