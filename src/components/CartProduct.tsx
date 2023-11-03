import React from "react";
import { sliceData } from "../../type";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deletProduct,
  increaseQuantity,
} from "@/store/slice";
const CartProduct = ({ title, image, quantity, price, id }: sliceData) => {
  const dispatch = useDispatch();
  return (
    <div className="h-full w-full">
      {
        <div className="flex gap-2 border-b-2 border-yellow-300">
          <div className="">
            <img src={image} className="h-48 w-48 m-1 rounded-xl" />
            <div className="flex border border-gray-100 rounded m-2 justify-center gap-2 text-lg">
              <button onClick={() => dispatch(increaseQuantity({ id }))}>
                +
              </button>
              <p>Quantity</p>
              <button onClick={() => dispatch(decreaseQuantity({ id }))}>
                -
              </button>
            </div>
          </div>

          <div className="flex w-full justify-center gap-4 flex-wrap">
            <p>{title.substring(0, 22)}</p>
            <p>$ {price * quantity}</p>
            <p>🎈{quantity}</p>
            <div>
              <button
                className="border rounded-md mt-1 p-1 h-7 text-sm hover:border-red-600"
                onClick={() => dispatch(deletProduct(id))}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default CartProduct;
