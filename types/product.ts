export interface IProduct {
    url: string;
    name: string;
    sku: string;
    slug: string;
    description: string;
    categories: ICategory[];
}

export interface ICategory {
    id: number;
    name: string;
    url: string;
}

export interface ProductList {
    products: IProduct[]
}