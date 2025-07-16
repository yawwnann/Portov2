import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// POST: Kirim pesan kontak
export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Semua field wajib diisi." },
      { status: 400 }
    );
  }
  const contact = await prisma.contactMessage.create({
    data: { name, email, message },
  });
  return NextResponse.json(contact, { status: 201 });
}
