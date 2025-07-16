import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { uploadToCloudinary } from "../../../../utils/cloudinary";
import formidable, { Fields, Files } from "formidable";
import fs from "fs";
import type { IncomingMessage } from "http";
import { verifyAuthHeader } from "../../../../utils/auth";

const prisma = new PrismaClient();

// GET: Detail project
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const project = await prisma.project.findUnique({ where: { id } });
  if (!project)
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(project);
}

// PUT: Edit project (support upload gambar)
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    verifyAuthHeader(req.headers.get("authorization") || undefined);
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = params;
  let data: Record<string, unknown> = {};
  let imageUrl = "";

  // Cek content-type, jika form-data maka handle upload gambar
  const contentType = req.headers.get("content-type") || "";
  if (contentType.includes("multipart/form-data")) {
    const form = formidable({ multiples: false });
    const [fields, files]: [Fields, Files] = await new Promise(
      (resolve, reject) => {
        form.parse(
          req as unknown as IncomingMessage,
          (err: unknown, fields: Fields, files: Files) => {
            if (err) reject(err);
            else resolve([fields, files]);
          }
        );
      }
    );
    function getStringField(field: string | string[] | undefined): string {
      if (Array.isArray(field)) return field[0] ?? "";
      return field ?? "";
    }
    if (files.image) {
      const file = Array.isArray(files.image) ? files.image[0] : files.image;
      const uploadResult = await uploadToCloudinary(file.filepath);
      imageUrl = uploadResult.secure_url;
      fs.unlinkSync(file.filepath);
    }
    data = {
      title: getStringField(fields.title),
      description: getStringField(fields.description),
      teknologi: fields.teknologi
        ? JSON.parse(getStringField(fields.teknologi))
        : [],
      link: getStringField(fields.link),
    };
    if (imageUrl) data.imageUrl = imageUrl;
  } else {
    // Jika JSON biasa
    data = await req.json();
  }

  const project = await prisma.project.update({ where: { id }, data });
  return NextResponse.json(project);
}

// DELETE: Hapus project
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    verifyAuthHeader(req.headers.get("authorization") || undefined);
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = params;
  await prisma.project.delete({ where: { id } });
  return NextResponse.json({ message: "Deleted" });
}
