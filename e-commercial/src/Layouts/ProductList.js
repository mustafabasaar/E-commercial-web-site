import React from "react";
import ProductListCard from "../Components/ProductListCard";
import { AllData } from "../assets/AllData";

function ProductList() {
  const Allproducts = AllData.productList;

  return (
    <div className="flex flex-wrap gap-[48px] items-center justify-center w-[80%] py-[48px] m-auto">
      {Allproducts.map((product) => {
        return <ProductListCard product={product} />;
      })}
    </div>
  );
}

export default ProductList;
