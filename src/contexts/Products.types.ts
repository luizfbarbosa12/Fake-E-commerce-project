import { ReactNode } from "react";

export interface ProductsProps {
    children?: ReactNode;
}

export interface CategoriesProps {
    data: string[]
}
export interface ProductsArrayProps {
    data: ProductObjectType
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