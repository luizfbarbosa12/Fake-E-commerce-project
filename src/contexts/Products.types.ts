import { ReactNode } from "react";

export interface ProductsProps {
    children?: ReactNode;
}

export type CategoriesProps = string[];
export interface ProductsArrayProps {
    map(arg0: (product: ProductObjectType) => JSX.Element): ReactNode;
    data?: ProductObjectType[];
    filter(arg0: (product: ProductObjectType) => JSX.Element): ReactNode;
}

export type ProductObjectType = {
    category?: string
    description?: string
    id?: number
    image?: string
    price?: number
    rating?: RatingsType
    title?: string
}

export type RatingsType = {
    count?: number
    rate?: number
}