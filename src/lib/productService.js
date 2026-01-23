import prisma from "./prisma";

// Get all products
export async function getAllProducts() {
  return await prisma.product.findMany({
    orderBy: { id: "asc" },
  });
}

// Get single product by ID
export async function getProductById(id) {
  return await prisma.product.findUnique({
    where: { id: Number(id) },
  });
}

// Create new product
export async function createProduct(data) {
  return await prisma.product.create({
    data: {
      name: data.name,
      category: data.category,
      price: Number(data.price),
      stock: Number(data.stock),
      description: data.description || null,
      image: data.image || null,
    },
  });
}

// Update product
export async function updateProduct(id, data) {
  return await prisma.product.update({
    where: { id: Number(id) },
    data: {
      name: data.name,
      category: data.category,
      price: Number(data.price),
      stock: Number(data.stock),
      description: data.description || null,
      image: data.image || null,
    },
  });
}

// Delete product
export async function deleteProduct(id) {
  return await prisma.product.delete({
    where: { id: Number(id) },
  });
}
