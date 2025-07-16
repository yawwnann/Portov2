import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { uploadToCloudinary } from "../../../utils/cloudinary";
import formidable, { Fields, Files } from "formidable";
import fs from "fs";
import type { IncomingMessage } from "http";
import { verifyAuthHeader } from "../../../utils/auth";

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

// GET: List semua project dengan pagination
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const skip = (page - 1) * limit;

  const [projects, total] = await Promise.all([
    prisma.project.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
    }),
    prisma.project.count(),
  ]);
  const totalPages = Math.ceil(total / limit);
  return NextResponse.json({
    data: projects,
    page,
    limit,
    total,
    totalPages,
  });
}

// POST: Tambah project dengan upload gambar
export async function POST(req: NextRequest) {
  try {
    verifyAuthHeader(req.headers.get("authorization") || undefined);
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

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

  let imageUrl = "";
  if (files.image) {
    const file = Array.isArray(files.image) ? files.image[0] : files.image;
    const uploadResult = await uploadToCloudinary(file.filepath);
    imageUrl = uploadResult.secure_url;
    fs.unlinkSync(file.filepath);
  }

  function getStringField(field: string | string[] | undefined): string {
    if (Array.isArray(field)) return field[0] ?? "";
    return field ?? "";
  }

  const data = {
    title: getStringField(fields.title),
    description: getStringField(fields.description),
    teknologi: fields.teknologi
      ? JSON.parse(getStringField(fields.teknologi))
      : [],
    imageUrl,
    link: getStringField(fields.link),
  };

  const project = await prisma.project.create({ data });
  return NextResponse.json(project, { status: 201 });
}

// PUT & DELETE biasanya untuk /api/projects/:id, bukan di root /api/projects
