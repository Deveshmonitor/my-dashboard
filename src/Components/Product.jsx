import React from "react";

const Product = ({ products }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="text-left bg-gray-100 border-b border-gray-200">
            <th className="py-2 px-4">Product Name</th>
            <th className="py-2 px-4">Category</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } border-b border-gray-200`}
            >
              <td className="py-2 px-4">{product.name}</td>
              <td className="py-2 px-4">{product.category}</td>
              <td className="py-2 px-4">${product.price}</td>
              <td className="py-2 px-4">{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
