import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/AppContext";
import { motion } from 'framer-motion';

const HomeProducts = () => {

  const { products, router } = useAppContext()
  const visibleProducts = products.slice(0, 3);

  return (
    <div className="px-6 md:px-16 lg:px-32 mb-12">
      <div className="flex flex-col items-center pt-14 container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Featured Courses</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600 text-base sm:text-lg">
            Start your learning journey with our most popular courses.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3  flex-col items-center gap-4 mt-6 pb-14 w-full">
          {visibleProducts.map((product, index) => <ProductCard key={index} product={product} />)}
        </div>
        <button onClick={() => { router.push('/all-products') }} className="flex justify-center items-center px-12 py-2.5 border rounded text-gray-500/70 hover:bg-slate-50/90 transition cursor-pointer hover:shadow-lg ">
          See more
          <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HomeProducts;
