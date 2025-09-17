import React from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "../lib/features/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div
      key={product._id}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
    >
      <div className="h-64 sm:h-72 md:h-80 lg:h-96">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-t-2xl w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
          {product.name}
        </span>
        <span className="text-base sm:text-lg md:text-xl text-gray-600 mt-1">
          ${product.price}
        </span>

        <Button
          className="w-full mt-auto bg-black text-white rounded-xl cursor-pointer"
          onClick={() =>
            dispatch(
              addToCart({
                _id: product._id,
                name: product.name,
                price: product.price,
                image: product.image,
              })
            )
          }
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
