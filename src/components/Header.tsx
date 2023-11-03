import Link from "next/link";
import React, { useState } from "react";
import { stateProps, sliceData, dropDown, productProps } from "../../type";
import { useSelector } from "react-redux";

const Header = () => {
  const { productData, favouriteData } = useSelector(
    (state: stateProps) => state.next
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 })

  const filterdProducts = productData.filter((item: dropDown) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    item.price >= priceRange.min &&
    item.price <= priceRange.max
  );

  console.log(filterdProducts);
  return (
    <div className="relative">
      <div className="flex justify-between p-2 h-16 bg-yellow-200 text-gray-600 fixed top-0 w-full z-10">
        <div className="">
          <Link href={"/"}>
            <h1 className="font-bold text-xl border hover:border-red-600 duration-300 p-2">
              SHOP NOW
            </h1>
          </Link>
        </div>
        <div className="flex h-7 mt-2">
          <input
            type="text"
            className="rounded border hover:border-red-600 p-2 w-64 md:w-80"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setShowDropdown(false)}
          />
           <div className="ml-4">
          <label htmlFor="priceRange" className="block text-gray-700 font-bold">
            Price Range:
          </label>
          <input
            type="range"
            id="priceRange"
            name="priceRange"
            min={0}
            max={200} // Adjust the max value as needed
            step={10} // Adjust the step value as needed
            value={priceRange.max}
            onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
          />
          <span className="text-red-600 text-sm flex -mt-16 font-bold ml-1"> ${priceRange.min} - ${priceRange.max}</span>
        </div>
          {showDropdown && (
            <div className="absolute top-10  z-20 mt-2 py-2 bg-white border border-gray-300 shadow-lg rounded w-64 h-64 md:w-80">
              {filterdProducts.map((item: dropDown) => (
                <div key={item.id} className="px-4 py-2 hover:bg-gray-100">
                  {item.title.substring(0, 22)}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-2 justify-center align-middle">
          <Link href="/cart">
            <h1 className="font-bold text-xl border border-transparent hover:border hover:border-red-600 duration-300 p-3 relative">
              <span className="absolute top-0 right-0 text-sm p-1">
                {favouriteData.length}
              </span>
              <span>❤️</span>
            </h1>
          </Link>
          <Link href="/cart">
            <h1 className="font-bold text-xl border border-transparent hover:border hover:border-red-600 duration-300 p-3 relative box-border">
              <span className="absolute top-0 right-0 text-sm p-1">
                {productData ? productData.length : 0}
              </span>
              <span>🛒</span>
            </h1>
          </Link>
          <Link href="/cart">
            <h1 className="font-bold text-xl border border-transparent hover:border hover:border-red-600 duration-300 p-3">
              CART
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
