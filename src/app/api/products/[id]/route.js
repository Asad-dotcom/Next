import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(_request, { params }) {
  const id = Number(params.id);
  const product = await prisma.product.findUnique({ where: { id } });

  if (!product) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}

export async function PUT(request, { params }) {
  const id = Number(params.id);
  const body = await request.json();

  const product = await prisma.product.update({
    where: { id },
    data: {
      name: body.name,
      category: body.category,
      price: body.price,
      stock: body.stock,
      description: body.description ?? null,
      image: body.image ?? null,
    },
  });

  return NextResponse.json(product);
}

export async function DELETE(_request, { params }) {
  const id = Number(params.id);
  await prisma.product.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
