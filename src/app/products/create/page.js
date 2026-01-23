import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import prisma from "../../../lib/prisma";

async function createProduct(formData) {
  "use server";

  const name = formData.get("name");
  const category = formData.get("category");
  const price = Number(formData.get("price") || 0);
  const stock = Number(formData.get("stock") || 0);
  const description = formData.get("description") || null;

  await prisma.product.create({
    data: {
      name,
      category,
      price,
      stock,
      description,
    },
  });

  redirect("/products");
}

const CreateProductPage = () => {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Product</h1>
      <form action={createProduct} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="category">
            Category
          </label>
          <input
            id="category"
            name="category"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="price">
              Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="stock">
              Stock
            </label>
            <input
              id="stock"
              name="stock"
              type="number"
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full border rounded px-3 py-2"
            rows={3}
          />
        </div>

        <div className="flex gap-2 mt-4">
          <button
            type="submit"
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
         >
            Save
          </button>
          <Link
            href="/products"
            className="px-4 py-2 rounded border border-gray-300 inline-block text-center"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreateProductPage;
