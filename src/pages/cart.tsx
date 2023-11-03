import React from "react";
import { sliceData, stateProps } from "../../type";
import { useSelector } from "react-redux";
import CartProduct from "@/components/CartProduct";


const Cart = () => {
  const { productData, favouriteData } = useSelector(
    (state: stateProps) => state.next
  );
  return (
    <div className="mt-[70px]">
      <div>
        <h1 className="border-b-2 border-yellow-300 ">Shopping Cart</h1>

        <div>
          {/* <CartProduct productData={productData}/> */}
          {productData.map(
            ({ title, image, price, id, quantity }: sliceData) => (
              <div key={id}>
                {
                  <CartProduct
                    title={title}
                    image={image}
                    price={price}
                    quantity={quantity}
                    id={id}
                  />
                }
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
