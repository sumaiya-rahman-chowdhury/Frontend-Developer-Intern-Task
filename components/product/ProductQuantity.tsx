interface ProductQuantityProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

const ProductQuantity = ({
  quantity,
  onDecrease,
  onIncrease,
}: ProductQuantityProps) => {
  return (
    <div className="flex items-center gap-5">
      <button
        className="py-1 px-3 shadow text-2xl"
        onClick={onDecrease}
        disabled={quantity <= 1}
      >
        -
      </button>
      <span>{quantity}</span>
      <button className="py-1 px-3 shadow text-2xl" onClick={onIncrease}>
        +
      </button>
    </div>
  );
};

export default ProductQuantity;
