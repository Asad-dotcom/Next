import React from "react";
import Link from "next/link";
import Product from "../components/Product";
import prisma from "../../lib/prisma";

const Page = async () => {
  const products = await prisma.product.findMany({
    orderBy: { id: "asc" },
  });

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link
          href="/products/create"
          className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
        >
          Add Product
        </Link>
      </div>

      <Product products={products} showActions={false} />
    </div>
  );
};

export default Page;