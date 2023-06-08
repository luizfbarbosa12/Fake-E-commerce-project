import { ReactNode } from "react";

export interface ProductsProps {
    children?: ReactNode;
}

export type CategoriesProps = string[];
export interface ProductsArrayProps {
    map(arg0: () => import("react/jsx-runtime").JSX.Element): ReactNode;
    data: ProductObjectType[]
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