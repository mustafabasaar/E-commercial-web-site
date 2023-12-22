import React from "react";
import { AllData } from "../assets/AllData";
import CategoryCard from "../Components/CategoryCard";

function AllCategories() {
  const allCategory = AllData.categories;
  return (
    <div className="flex flex-wrap gap-[15px] pb-[48px] justify-center bg-[#FAFAFA] ">
      {allCategory.map((category) => {
        return <CategoryCard category={category} />;
      })}
    </div>
  );
}

export default AllCategories;
