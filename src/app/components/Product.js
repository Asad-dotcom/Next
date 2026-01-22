import React from 'react'
import Image from 'next/image'

const Product = ({ products, onEdit, onDelete, showActions = true }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
        <Image
  src="https://placehold.co/600x400"
  alt={product.name}
  width={600}
  height={400}
    unoptimized
  className="rounded-t-lg w-full h-48 object-cover"
/>

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h5>
            <p className="text-sm text-gray-500 mb-1">
              {product.category}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {product.description}
            </p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              ₹{product.price}
            </p>
            <p className="text-sm text-gray-500 mb-3">
              In stock: {product.stock}
            </p>

            {showActions && (
              <div className="flex gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => onEdit && onEdit(product.id)}
                  className="px-3 py-1 text-sm rounded bg-blue-600 text-white hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => onDelete && onDelete(product.id)}
                  className="px-3 py-1 text-sm rounded bg-red-600 text-white hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Product