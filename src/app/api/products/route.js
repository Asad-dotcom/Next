import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET() {
  const products = await prisma.product.findMany({
    orderBy: { id: "asc" },
  });
  return NextResponse.json(products);
}

export async function POST(request) {
  const body = await request.json();

  const product = await prisma.product.create({
    data: {
      name: body.name,
      category: body.category,
      price: body.price,
      stock: body.stock,
      description: body.description ?? null,
      image: body.image ?? null,
    },
  });

  return NextResponse.json(product, { status: 201 });
}
