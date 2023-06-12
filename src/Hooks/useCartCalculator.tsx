import { useEffect, useState } from "react";
import { ProductObjectType } from "../contexts/Products.types";

interface CartCalculatorHook {
  quantities: Record<number, number>;
  calculateTotal: () => number;
  handleQuantityChange: (productId: number, quantity: number) => void;
}

const useCartCalculator = (cartItems: ProductObjectType[]): CartCalculatorHook => {
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  useEffect(() => {
    const updatedQuantities = cartItems.reduce((acc, item) => {
      return { ...acc, [item.id]: quantities[item.id] || 1 };
    }, {});
    setQuantities(updatedQuantities);
  }, [cartItems]);

  const calculateTotal = () => {
    const total = cartItems.reduce(
      (sum, product) =>
        sum + (product.price || 0) * (quantities[product.id] || 1),
      0
    );
    return total;
  };

  const handleQuantityChange = (productId: number, quantity: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };

  return {
    quantities,
    calculateTotal,
    handleQuantityChange
  };
};

export default useCartCalculator;