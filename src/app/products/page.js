"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Product from "../components/Product";
import { useProducts } from "../../lib/useProducts";

const Page = () => {
  const router = useRouter();
  const { products, loading, deleteProduct } = useProducts();

  const handleCreate = () => {
    router.push("/products/create");
  };

  const handleEdit = (id) => {
    router.push(`/products/${id}/edit`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct(id);
    }
  };

  if (loading) {
    return <div className="p-4">Loading products...</div>;
  }

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <button
          type="button"
          onClick={handleCreate}
          className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
        >
          Add Product
        </button>
      </div>

      <Product
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
        showActions
      />
    </div>
  );
};

export default Page;