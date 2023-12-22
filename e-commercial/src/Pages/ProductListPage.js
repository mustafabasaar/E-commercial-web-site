import React from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import NavBar from "../Layouts/NavBar";
import Icons from "../Components/Icons";
import ProductList from "../Layouts/ProductList";
import PaginationCmp from "../Components/PaginationCmp";
import { Images } from "../assets/Images";
import AllCategories from "../Layouts/AllCategories";

function ProductListPage() {
  return (
    <div className="">
      <Header />
      <NavBar />
      <div className=" flex justify-around items-center py-[24px] bg-[#FAFAFA]">
        <h2 className="text-[#252B42] text-[24px] font-bold">Shop</h2>
        <div className="flex gap-[15px]">
          <p className="text-[#252B42] text-[14px] font-bold">Home</p>
          <img src={Images.shapes.vectors.nextVector} alt="" />
          <p className="text-[#BDBDBD] text-[14px] font-bold">Shop</p>
        </div>
      </div>
      <AllCategories />
      <ProductList />
      <PaginationCmp />
      <Icons />
      <Footer />
    </div>
  );
}

export default ProductListPage;
