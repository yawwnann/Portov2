import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "default_secret";

// POST: Login admin
export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  if (!username || !password) {
    return NextResponse.json(
      { error: "Username dan password wajib diisi." },
      { status: 400 }
    );
  }
  const admin = await prisma.admin.findUnique({ where: { username } });
  if (!admin) {
    return NextResponse.json(
      { error: "Username atau password salah." },
      { status: 401 }
    );
  }
  const valid = await bcrypt.compare(password, admin.password);
  if (!valid) {
    return NextResponse.json(
      { error: "Username atau password salah." },
      { status: 401 }
    );
  }
  // Generate JWT
  const token = jwt.sign(
    { id: admin.id, username: admin.username },
    JWT_SECRET,
    { expiresIn: "1d" }
  );
  return NextResponse.json({
    admin: { id: admin.id, username: admin.username },
    token,
  });
}
