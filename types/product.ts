export interface Image {
    full?: string;
    thumbnail?: string
}

export interface IProductMedia {
    image: Image;
    image_alt_text: string;
}

export interface ICategory {
    id: number;
    name: string;
    url: string;
    background_image?: Image
}

export interface IProduct {
    url: string;
    name: string;
    sku: string;
    slug: string;
    description: string;
    categories: ICategory[];
    media: IProductMedia[];
    retail_price: string;
    sale_price: string;
    discount?: string
}

export interface ProductList {
    products: IProduct[]
}