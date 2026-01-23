import { NextResponse } from "next/server";
import { getAllProducts, createProduct } from "../../../lib/productService";

export async function GET() {
  const products = await getAllProducts();
  return NextResponse.json(products);
}

export async function POST(request) {
  const body = await request.json();
  const product = await createProduct(body);
  return NextResponse.json(product, { status: 201 });
}
