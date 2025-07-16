import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const username = "admin"; // Ganti sesuai keinginan
  const password = "admin123"; // Ganti sesuai keinginan

  // Cek apakah admin sudah ada
  const existing = await prisma.admin.findUnique({ where: { username } });
  if (existing) {
    console.log("Admin sudah ada");
    return;
  }

  const hash = await bcrypt.hash(password, 10);
  await prisma.admin.create({
    data: {
      username,
      password: hash,
    },
  });
  console.log("Admin berhasil dibuat!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
