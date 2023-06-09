import { NavigateFunction } from "react-router-dom";

export type NavigateFunctionType = NavigateFunction;

export const goToCategoryPage = (navigate: NavigateFunctionType, category: string) => {
    navigate(`/${category}`);
}

export const goToHomePage = (navigate: NavigateFunctionType) => {
    navigate('/')
}

export const goToProductDetails = (navigate: NavigateFunctionType, id: number | undefined) => {
    navigate(`/productDetails/${id}`)
}

export const goToCartPage = (navigate: NavigateFunctionType) => {
    navigate("/cart")
}