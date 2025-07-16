import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET: Ambil deskripsi about
export async function GET() {
  // Ambil about pertama (diasumsikan hanya ada satu)
  const about = await prisma.about.findFirst();
  return NextResponse.json(about);
}

// PUT: Edit deskripsi about (admin)
export async function PUT(req: NextRequest) {
  const { description } = await req.json();
  // Diasumsikan hanya ada satu about, update by id pertama
  const about = await prisma.about.findFirst();
  if (!about) {
    // Jika belum ada, buat baru
    const newAbout = await prisma.about.create({ data: { description } });
    return NextResponse.json(newAbout);
  }
  const updated = await prisma.about.update({
    where: { id: about.id },
    data: { description },
  });
  return NextResponse.json(updated);
}
