import React from "react";
import { productProps } from "../../type";
import Products from "@/components/Products";


interface props {
  productData: productProps;
}
const index = ({ productData }: props) => {
  return (
    <>
      <Products productData={productData} />
    </>
  );
};

export default index;

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const productData = await res.json();
  return { props: { productData } };
}
