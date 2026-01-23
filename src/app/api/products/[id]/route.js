import { NextResponse } from "next/server";
import { getProductById, updateProduct, deleteProduct } from "../../../../lib/productService";

export async function GET(_request, { params }) {
  const resolvedParams = await params;
  const product = await getProductById(resolvedParams.id);

  if (!product) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}

export async function PUT(request, { params }) {
  const resolvedParams = await params;
  const body = await request.json();
  const product = await updateProduct(resolvedParams.id, body);
  return NextResponse.json(product);
}

export async function DELETE(_request, { params }) {
  const resolvedParams = await params;
  await deleteProduct(resolvedParams.id);
  return NextResponse.json({ success: true });
}
