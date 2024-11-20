import React from "react";
import ProductTable from "./Product";

const Catalog = () => {
  const products = [
    { name: "Product 1", category: "Category A", price: 29.99, stock: 10 },
    { name: "Product 2", category: "Category B", price: 19.99, stock: 0 },
    { name: "Product 3", category: "Category A", price: 49.99, stock: 5 },
    { name: "Product 4", category: "Category C", price: 9.99, stock: 20 },
  ];

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Product Catalog</h1>
      <ProductTable products={products} />
    </div>
  );
};

export default Catalog;
