import { useEffect, useState } from "react";
import { ProductObjectType } from "../contexts/Products.types";

type useCartCalculatorProps = {
  cartItems: ProductObjectType[] | undefined;
};

const useCartCalculator = ({ cartItems }: useCartCalculatorProps) => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const updateQuantities = async () => {
      const updatedQuantities = cartItems?.reduce(async (accPromise, item) => {
        const acc = await accPromise;
        return { ...acc, [item.id]: quantities[item.id] || 1 };
      }, Promise.resolve({}));
      setQuantities(await updatedQuantities);
    };

    updateQuantities();
  }, [cartItems, quantities]);

  useEffect(() => {
    const calculateTotal = async () => {
      const calculatedTotal = await cartItems?.reduce(async (sumPromise, product) => {
        const sum = await sumPromise;
        return sum + (product.price || 0) * (quantities[product.id] || 1);
      }, Promise.resolve(0));
      setTotalPrice(calculatedTotal || 0);
    };

    calculateTotal();
  }, [cartItems, quantities]);

  const handleQuantityChange = async (productId: number, quantity: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };

  return {
    quantities,
    totalPrice,
    handleQuantityChange,
  };
};

export default useCartCalculator;