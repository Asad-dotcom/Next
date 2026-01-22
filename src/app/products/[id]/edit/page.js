import React from "react";
import { redirect } from "next/navigation";
import prisma from "../../../../lib/prisma";

async function updateProductAction(id, formData) {
  "use server";

  const name = formData.get("name");
  const category = formData.get("category");
  const price = Number(formData.get("price") || 0);
  const stock = Number(formData.get("stock") || 0);
  const description = formData.get("description") || null;

  await prisma.product.update({
    where: { id },
    data: { name, category, price, stock, description },
  });

  redirect("/products");
}

const EditProductPage = async ({ params }) => {
  const id = Number(params.id);
  const product = await prisma.product.findUnique({ where: { id } });

  if (!product) {
    redirect("/products");
  }

  const updateWithId = updateProductAction.bind(null, id);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      <form action={updateWithId} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            defaultValue={product.name || ""}
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
            defaultValue={product.category || ""}
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
              defaultValue={String(product.price ?? "")}
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
              defaultValue={String(product.stock ?? "")}
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
            defaultValue={product.description || ""}
            className="w-full border rounded px-3 py-2"
            rows={3}
          />
        </div>

        <div className="flex gap-2 mt-4">
          <button
            type="submit"
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Update
          </button>
          <button
            type="button"
            formAction="/products"
            className="px-4 py-2 rounded border border-gray-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProductPage;
