import React, { Fragment } from "react";
import useFetch from "../hooks/useApi";

function Products() {
  const { products, loading, error } = useFetch();

  if (loading) {
    return (
      <div className="h-[100vh] flex justify-center items-center bg-[#171c48] text-[#24feee]">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-[100vh] flex justify-center items-center bg-[#171c48] text-red-500">
        Error: {error.message}
      </div>
    );
  }

  return (
    <Fragment>
      <div className="min-h-screen p-4 bg-[#171c48]">
     
        <div className="mt-4 flex flex-col justify-center items-center">
          <h2 className="text-2xl text-[#24feee] font-bold mb-8">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-contain p-4"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-gray-700">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Products;
