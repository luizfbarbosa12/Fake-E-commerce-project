import { ChangeEvent } from "react";


interface QuantitySelectProps {
    quantity: number
    handleQuantityChange: (id: number, event: ChangeEvent<HTMLSelectElement>) => void
    id: number
}
const QuantitySelect = ({quantity, handleQuantityChange, id}: QuantitySelectProps) => {
  return (
    <select
      value={quantity}
      onChange={(e) => handleQuantityChange(id, parseInt(e.target.value))}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default QuantitySelect;
