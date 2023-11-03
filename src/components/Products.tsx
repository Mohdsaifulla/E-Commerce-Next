import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, addToFavourite } from "@/store/slice";
import { productProps, sliceData } from "../../type";
const Products = ({ productData }: any) => {
  console.log(productData);
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 ">
      {productData &&
        productData.map(
          ({
            title,
            image,
            price,
            rating,
            description,
            category,
            id,
          }: productProps) => (
            <div className="border rounded-2xl p-2 m-2 flex flex-col justify-center text-center relative mt-[70px]">
              <div className="absolute top-1  right-2  cursor-pointer">
                <span
                  className="hover:bg-yellow-300 rounded-full cursor-pointer duration-300"
                  onClick={() =>
                    dispatch(
                      addToFavourite({
                        id: id,
                        title: title,
                        price: price,
                        description: description,
                        category: category,
                        image: image,
                        rating: {
                          count: rating.count,
                          rate: rating.rate,
                        },
                        quantity: 1,
                      })
                    )
                  }
                >
                  ❤️
                </span>
              </div>
              <div className="flex justify-center">
                <img
                  src={image}
                  alt="productImage"
                  className="h-48 w-full p-3 rounded-2xl m-2 cursor-pointer scale-100 hover:scale-110 duration-300 md:h-60 md:w-60"
                />
              </div>
              <hr />
              <div className="flex justify-center flex-col">
                <p>{title.substring(0, 22)}...</p>
                <p>$ {price}</p>
                <p> Rating ⭐ {rating.rate}</p>
                <button
                  className="border p-1 hover:border-red-600 duration-300 rounded-sm"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: id,
                        title: title,
                        price: price,
                        description: description,
                        category: category,
                        image: image,
                        rating: {
                          count: rating.count,
                          rate: rating.rate,
                        },
                        quantity: 1,
                      })
                    )
                  }
                >
                  Add To Cart
                </button>
              </div>
            </div>
          )
        )}
    </div>
  );
};

export default Products;
